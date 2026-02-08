import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { db } from "./db";
import { projects, testimonials } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  app.get(api.projects.list.path, async (req, res) => {
    const projectsList = await storage.getProjects();
    res.json(projectsList);
  });

  app.get(api.testimonials.list.path, async (req, res) => {
    const testimonialsList = await storage.getTestimonials();
    res.json(testimonialsList);
  });

  // Seed data function
  const seedData = async () => {
    const existingProjects = await storage.getProjects();
    if (existingProjects.length === 0) {
      await db.insert(projects).values([
        {
          title: "E-commerce Moderno",
          description: "Plataforma de vendas online com design responsivo e alta conversão.",
          imageUrl: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
          category: "E-commerce",
          projectUrl: "#"
        },
        {
          title: "App Corporativo",
          description: "Sistema de gestão interna para grande empresa de logística.",
          imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
          category: "Sistema Web",
          projectUrl: "#"
        },
        {
          title: "Landing Page Startup",
          description: "Página de alta performance para captação de leads.",
          imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
          category: "Landing Page",
          projectUrl: "#"
        }
      ]);
    }

    const existingTestimonials = await storage.getTestimonials();
    if (existingTestimonials.length === 0) {
      await db.insert(testimonials).values([
        {
          name: "Carlos Silva",
          role: "CEO",
          company: "TechSolutions",
          content: "A Loufex transformou nossa presença digital. O site novo é incrível e rápido!",
          avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
        },
        {
          name: "Ana Oliveira",
          role: "Diretora de Marketing",
          company: "InovaCorp",
          content: "Profissionalismo e qualidade técnica excepcionais. Recomendo fortemente.",
          avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
        },
        {
          name: "Roberto Mendes",
          role: "Fundador",
          company: "StartMove",
          content: "Entregaram o projeto antes do prazo e com uma qualidade superior ao esperado.",
          avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80"
        }
      ]);
    }
  };

  // Run seed
  seedData().catch(console.error);

  return httpServer;
}
