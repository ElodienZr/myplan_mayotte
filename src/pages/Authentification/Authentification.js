import React, { useState, useContext  } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Authentification() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/Home"); // Redirection vers le dashboard après connexion
    } catch (error) {
      alert("Erreur lors de la connexion. Vérifiez vos identifiants.");
    }
  };

  return (
    <div>
    <body class="hold-transition sidebar-mini login-page layout-fixed">
        <div className="login-box">
          <div className="login-logo">
             <img src="logo_mayplan.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
             <br></br>
             <a href><b>Mayplan </b>Mayotte</a>
          </div>
          {/* /.login-logo */}
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Se connecter pour commencer votre session.</p>
              <form onSubmit={handleSubmit} >
                <div className="input-group mb-3">
                  <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">
                          Se souvenir de moi.
                      </label>
                    </div>
                  </div>
                  {/* /.col */}
                  <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-block">Se connecter</button>
                  </div>
                  {/* /.col */}
                </div>
              </form>
              <div className="social-auth-links text-center mb-3">
                <p>- OU -</p>
                <a href className="btn btn-block btn-danger">
                  <i className="fab fa-google-plus mr-2" /> Sign in using Google+
                </a>
              </div>
              {/* /.social-auth-links */}
              <p className="mb-1">
                <a href="forgot-password.html">I forgot my password</a>
              </p>
              <p className="mb-0">
                <a href="register.html" className="text-center">Register a new membership</a>
              </p>
            </div>
            {/* /.login-card-body */}
          </div>
        </div>
        {/* /.login-box */}
        </body>
    </div>
  );
}

export default Authentification;
