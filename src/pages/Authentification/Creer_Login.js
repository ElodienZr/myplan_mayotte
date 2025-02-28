import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Inscription() {
  const [name, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("user"); // Valeur par défaut
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas !");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/auth/register", {
        name,
        email,
        password,
        role,  // Envoi du rôle
      });

      alert("Inscription réussie ! Connectez-vous maintenant.");
      navigate("/login");
    } catch (err) {
      setError("Erreur lors de l'inscription !");
    }
  };

  return (
    <div className="register-box">
      <div className="register-logo">
        <a href><b>Mayplan</b>Mayotte</a>
      </div>

      <div className="card">
        <div className="card-body register-card-body">
          <p className="login-box-msg">Créer un compte</p>

          {error && <p className="text-danger">{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Nom" 
                value={name}
                onChange={(e) => setNom(e.target.value)}
              />
            </div>

            <div className="input-group mb-3">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group mb-3">
              <input 
                type="password" 
                className="form-control" 
                placeholder="Mot de passe" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="input-group mb-3">
              <input 
                type="password" 
                className="form-control" 
                placeholder="Confirmer le mot de passe" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div className="input-group mb-3">
              <select
                className="form-control"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="user">Utilisateur</option>
                <option value="admin">Administrateur</option>
              </select>
            </div>

            <div className="row">
              <div className="col-4">
                <button type="submit" className="btn btn-primary btn-block">
                  S'inscrire
                </button>
              </div>
            </div>
          </form>

          <p className="mt-3">
            <a href="/login">J'ai déjà un compte</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Inscription;
