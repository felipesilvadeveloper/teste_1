import { db } from "./db";
import {
  inquiries,
  projects,
  testimonials,
  type InsertInquiry,
  type Inquiry,
  type Project,
  type Testimonial
} from "@shared/schema";

export interface IStorage {
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  getProjects(): Promise<Project[]>;
  getTestimonials(): Promise<Testimonial[]>;
}

export class DatabaseStorage implements IStorage {
  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const [inquiry] = await db.insert(inquiries).values(insertInquiry).returning();
    return inquiry;
  }

  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return await db.select().from(testimonials);
  }
}

export const storage = new DatabaseStorage();
