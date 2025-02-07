const express = require("express");
const bcrypt = require("bcryptjs");
const db = require("../db/db");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body; // Récupération du rôle

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)";
    db.query(sql, [name, email, hashedPassword, role], (err, result) => {
      if (err) return res.status(500).json({ message: "Erreur serveur" });

      res.status(201).json({ message: "Utilisateur créé avec succès !" });
    });
  } catch (error) {
    res.status(500).json({ message: "Erreur d'inscription" });
  }
});

module.exports = router;
