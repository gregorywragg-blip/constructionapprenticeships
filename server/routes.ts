import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

const VALID_USERS = ['beli', 'jamie', 'wallace', 'megan', 'sandra'];
const VALID_PASSWORD = 'hiregreg';

export async function registerRoutes(app: Express): Promise<Server> {
  app.post('/api/login', (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (VALID_USERS.includes(username) && password === VALID_PASSWORD) {
      req.session.username = username;
      req.session.login_time = new Date().toISOString();
      res.json({ success: true, username });
    } else {
      res.status(401).json({ success: false, message: 'Access Denied' });
    }
  });

  app.post('/api/logout', (req: Request, res: Response) => {
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

  const httpServer = createServer(app);

  return httpServer;
}
