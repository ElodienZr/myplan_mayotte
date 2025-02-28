require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // Pour traiter les requêtes JSON

// Connexion à MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // Remplace par ton mot de passe MySQL
  database: "mayplan",
});

db.connect((err) => {
  if (err) {
    console.error("Erreur de connexion à la base de données :", err);
  } else {
    console.log("Connecté à MySQL !");
  }
});

// Endpoint pour enregistrer une réservation
app.post("/api/reservations", (req, res) => {
  const { nom, email, date, mode } = req.body;
  if (!nom || !email || !date || !mode) {
    return res.status(400).json({ message: "Tous les champs sont requis." });
  }

  const sql = "INSERT INTO reservations (nom, email, date, mode) VALUES (?, ?, ?, ?)";
  db.query(sql, [nom, email, date, mode], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Erreur lors de l'enregistrement." });
    }
    res.status(201).json({ message: "Réservation enregistrée avec succès !" });
  });
});

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
