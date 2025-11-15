import { type User, type InsertUser, type ActivityLog, type InsertActivityLog } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  logActivity(log: InsertActivityLog): Promise<ActivityLog>;
  getActivityLogs(limit?: number): Promise<ActivityLog[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private activityLogs: ActivityLog[];

  constructor() {
    this.users = new Map();
    this.activityLogs = [];
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async logActivity(insertLog: InsertActivityLog): Promise<ActivityLog> {
    const id = randomUUID();
    const timestamp = new Date();
    const log: ActivityLog = { 
      id, 
      timestamp, 
      username: insertLog.username,
      page: insertLog.page,
      details: insertLog.details
    };
    this.activityLogs.push(log);
    return log;
  }

  async getActivityLogs(limit: number = 1000): Promise<ActivityLog[]> {
    return this.activityLogs
      .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
      .slice(0, limit);
  }
}

export const storage = new MemStorage();
