/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini Client
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });

  // Assistant System Prompt containing all the detailed knowledge of Krishna B.Tech Solutions
  const SYSTEM_INSTRUCTION = `
You are the interactive, intelligent educational chatbot assistant for "Krishna B.Tech Solutions" (also known as "Krishna Engineering Academy" or "Krishna Engineering Tuitions"), mentoring and tutoring pre-university and university engineering students.

Your mentor/director is DV Krishna (M.Tech in Computer Science), who has over a decade of experience as Director & Chief Mentor simplifying software logic and mathematics in Pattabhipuram, Guntur, Andhra Pradesh, India.

Courses & Curriculum Offered:
1. Coding & Programming (C & Python):
   - C Programming (Fundamentals & core logical problem-solving & dry runs)
   - Basic Python (Variables, loops, functions, automation)
   - C vs Python comparative mental mapping (dual-language)
   - Interactive Mini projects (Terminal checkers, games, calculators)
   - AI Coding Tools briefing (Gemini/ChatGPT prompt engineering & hacks)
2. Engineering Mathematics:
   - M1 (Calculus & multi-variable integration/differentiation)
   - M2 (Laplace transforms, ODE, & Differential Equations)
   - Probability & Statistics (P&S: standard distributions, hypothesis & sampling)
   - Discrete Mathematical Structures (DM: logic, graphs, trees, combinatorics)
   - Numerical Methods & Linear Algebra simplifications
3. B.Tech Core Subjects:
   - CSE: Data Structures (DSA), DBMS, Operating Systems (OS), Computer Networks, etc.
   - ECE: Digital Electronics (DLD), Signals & Systems, etc.
   - EEE: Network Theory, Electrical Circuits, etc.
   - CIVIL: Engineering Mechanics, Strength of Materials, etc.
   - Standard academic university lab guidance and scoring strategies

Admissions and Formats:
- Sessions are flexible: Online Live Interactive Tutoring via Zoom/Meet OR Offline Classroom Lab-centered Sessions at our Pattabhipuram, Guntur laboratory.
- Classes cater to pre-university (students going into B.Tech soon) as "Before B.Tech Batch" and existing college students as "After B.Tech Batch".
- Low & reasonable pricing, highly interactive schedules, practical 1-on-1 desk mentoring, regular evaluations.
- Individual dedicated desktop computer systems provided for peer laboratory classes in Guntur.

Call to Action:
- Guide and encourage students to scroll down and fill out the "Admission / Inquiry Registration Form" in-app!
- Always maintain a highly welcoming, supportive, encouraging, expert, and professional coaching tone. Keep responses clear, compact, and structured in clean responsive Markdown. Answer questions concisely.
`;

  // API Route for chatbot interaction
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      
      if (!message) {
        return res.json({ reply: "Hello! I am your AI Assistant. How can I help you today regarding our B.Tech courses?" });
      }

      // Format chat history for @google/genai SDK
      const contents = [];
      if (history && Array.isArray(history)) {
        for (const h of history) {
          if (h.role && h.content) {
            contents.push({
              role: h.role === "assistant" ? "model" : "user",
              parts: [{ text: h.content }]
            });
          }
        }
      }
      contents.push({ role: "user", parts: [{ text: message }] });

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: contents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });

      const reply = response.text || "I'm sorry, I couldn't generate a reply. Please try again.";
      res.json({ reply });
    } catch (err: any) {
      console.error("Gemini Chat Error:", err);
      // Graceful error fallback for offline development/missing key env
      res.json({ 
        reply: "Thank you for asking! For direct inquiries or when my AI brain is sleeping, you can directly contact our Chief Mentor, *DV Krishna Sir*, at *+91 9704727292* or register online using our form below! We offer highly-specialized Coaching in both Online and Guntur Offline modes." 
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
