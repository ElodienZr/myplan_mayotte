import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "./../db/db.js";
import dotenv from "dotenv";

dotenv.config();

export const register = (req, res) => {
  const { name, email, password, role } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  const query = "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)";
  db.query(query, [name, email, hashedPassword, role || 'user'], (err) => {
    if (err) return res.status(500).json("Erreur serveur");
    res.status(201).json("Utilisateur créé !");
  });
};

export const login = (req, res) => {
    const { email, password } = req.body;
  
    const query = "SELECT * FROM users WHERE email = ?";
    db.query(query, [email], (err, results) => {
      if (err || results.length === 0) return res.status(404).json("Utilisateur non trouvé");
  
      const user = results[0];
      const isMatch = bcrypt.compareSync(password, user.password);
  
      if (!isMatch) return res.status(400).json("Mot de passe incorrect");
  
      const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
  
      res.cookie("token", token, { httpOnly: true }).status(200).json({ message: "Connexion réussie", role: user.role });
    });
  };
