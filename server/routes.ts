import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contactSubmission = await storage.createContactSubmission(validatedData);
      
      console.log("New contact submission received:", {
        name: contactSubmission.name,
        email: contactSubmission.email,
        mobile: contactSubmission.mobile,
        message: contactSubmission.message.substring(0, 50) + "...",
      });

      res.status(201).json({
        success: true,
        message: "Kontaktanfrage erfolgreich gesendet",
        id: contactSubmission.id,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Validierungsfehler",
          errors: error.errors,
        });
      } else {
        console.error("Error processing contact submission:", error);
        res.status(500).json({
          success: false,
          message: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
        });
      }
    }
  });

  app.get("/api/contact-submissions", async (req, res) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({
        success: false,
        message: "Fehler beim Abrufen der Kontaktanfragen",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
