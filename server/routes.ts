import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { logActivitySchema } from "@shared/schema";

const VALID_USERS = ['beli', 'jamie', 'wallace', 'megan', 'sandra', 'gwragg'];
const VALID_PASSWORD = 'hiregreg';

export async function registerRoutes(app: Express): Promise<Server> {
  app.post('/api/login', async (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (VALID_USERS.includes(username) && password === VALID_PASSWORD) {
      req.session.username = username;
      req.session.login_time = new Date().toISOString();
      
      req.session.save(async (err) => {
        if (err) {
          res.status(500).json({ success: false, message: 'Session save failed' });
          return;
        }
        
        try {
          await storage.logActivity({ username, page: 'Login', details: 'User logged in' });
          res.json({ success: true, username });
        } catch (error) {
          console.error('Failed to log activity:', error);
          res.status(500).json({ success: false, message: 'Failed to log activity' });
        }
      });
    } else {
      res.status(401).json({ success: false, message: 'Access Denied' });
    }
  });

  app.post('/api/logout', async (req: Request, res: Response) => {
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
    
    try {
      await storage.logActivity({ username, page: 'Logout', details: `Total session duration: ${durationString}` });
    } catch (error) {
      console.error('Failed to log logout activity:', error);
    }

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

  app.post('/api/log-activity', async (req: Request, res: Response) => {
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
    try {
      await storage.logActivity({ username: req.session.username, page, details });
      res.json({ success: true });
    } catch (error) {
      console.error('Failed to log activity:', error);
      res.status(500).json({ success: false, message: 'Failed to log activity' });
    }
  });

  app.get('/api/activity-logs', async (req: Request, res: Response) => {
    if (!req.session.username) {
      res.status(401).json({ success: false, message: 'Not authenticated' });
      return;
    }

    if (req.session.username !== 'gwragg') {
      res.status(403).json({ success: false, message: 'Unauthorized access' });
      return;
    }

    try {
      const logs = await storage.getActivityLogs();
      res.json(logs);
    } catch (error) {
      console.error('Failed to fetch activity logs:', error);
      res.status(500).json({ success: false, message: 'Failed to fetch activity logs' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
