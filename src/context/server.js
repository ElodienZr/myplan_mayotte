import express from "express";
import helmet from "helmet";
import cors from "cors";
import authRoutes from "./authRoutes.js";
import rateLimit from "express-rate-limit";

const app = express();

app.use(express.json()); // Protection contre XSS et injection JSON
app.use(helmet()); // Ajoute des headers HTTP sécurisés
app.use(cors({ origin: "http://localhost:3000", credentials: true })); // Autoriser React

app.use("/auth", authRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limite de 100 requêtes par IP
    message: "Trop de requêtes, réessayez plus tard",
  });
  
  app.use(limiter);