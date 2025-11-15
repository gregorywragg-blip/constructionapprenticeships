import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { logToCSV } from "./utils/csvLogger";
import { logActivitySchema } from "@shared/schema";

const VALID_USERS = ['beli', 'jamie', 'wallace', 'megan', 'sandra', 'gwragg'];
const VALID_PASSWORD = 'hiregreg';

export async function registerRoutes(app: Express): Promise<Server> {
  app.post('/api/login', (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (VALID_USERS.includes(username) && password === VALID_PASSWORD) {
      req.session.username = username;
      req.session.login_time = new Date().toISOString();
      
      req.session.save((err) => {
        if (err) {
          res.status(500).json({ success: false, message: 'Session save failed' });
          return;
        }
        
        logToCSV(username, 'Login', 'User logged in');
        res.json({ success: true, username });
      });
    } else {
      res.status(401).json({ success: false, message: 'Access Denied' });
    }
  });

  app.post('/api/logout', (req: Request, res: Response) => {
    if (!req.session.username || !req.session.login_time) {
      res.status(401).json({ success: false, message: 'Not authenticated' });
      return;
    }

    const username = req.session.username;
    const loginTime = new Date(req.session.login_time);
    const logoutTime = new Date();
    const durationMs = logoutTime.getTime() - loginTime.getTime();
    
    const hours = Math.floor(durationMs / (1000 * 60 * 60));
    const minutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((durationMs % (1000 * 60)) / 1000);
    
    const durationString = `${hours}h ${minutes}m ${seconds}s`;
    
    logToCSV(username, 'Logout', `Total session duration: ${durationString}`);

    req.session.destroy((err) => {
      if (err) {
        res.status(500).json({ success: false, message: 'Logout failed' });
      } else {
        res.json({ success: true });
      }
    });
  });

  app.get('/api/check-auth', (req: Request, res: Response) => {
    if (req.session.username) {
      res.json({ 
        authenticated: true, 
        username: req.session.username,
        login_time: req.session.login_time
      });
    } else {
      res.json({ authenticated: false });
    }
  });

  app.post('/api/log-activity', (req: Request, res: Response) => {
    if (!req.session.username) {
      res.status(401).json({ success: false, message: 'Not authenticated' });
      return;
    }

    const result = logActivitySchema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({ success: false, message: 'Invalid request data', errors: result.error.errors });
      return;
    }

    const { page, details } = result.data;
    logToCSV(req.session.username, page, details);
    res.json({ success: true });
  });

  const httpServer = createServer(app);

  return httpServer;
}
