import { useState, useEffect } from "react";

export default function ReservezEntretien() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    date: "",
    mode: "",
  });

  const [errors, setErrors] = useState({});
  const [reservations, setReservations] = useState([]);
 

  // 🔹 Récupération des réservations depuis l'API
  useEffect(() => {
    fetch("http://localhost:5000/api/reservations")
      .then((response) => response.json())
      .then((data) => {
        console.log("Données récupérées :", data); // 🔍 Vérification
        setReservations(data);
      })
      .catch((error) => console.error("Erreur lors de la récupération :", error));
  }, []);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleConfirmSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowConfirmation(true);
    }
  };
  
  const filteredReservations = reservations
  .filter((res) => res && res.nom && res.email)
  .filter((res) =>
    res.nom.toLowerCase().includes(searchQuery.toLowerCase()) ||
    res.email.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.nom.trim()) newErrors.nom = "Le nom est requis.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Un email valide est requis.";
    if (!formData.date) newErrors.date = "Veuillez choisir une date.";
    if (!formData.mode) newErrors.mode = "Veuillez sélectionner un mode d'entretien.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch("http://localhost:5000/api/reservations", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (response.ok) {
          //setIsSubmitted(true);
          setReservations([...reservations, data]); // 🔹 Ajout direct de la nouvelle réservation
          setShowConfirmation(false);
          setFormData({ nom: "", email: "", date: "", mode: "" });
          console.log("Réservation enregistrée :", data);
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error("Erreur lors de la réservation :", error);
      }
    }
  };

  return (
    <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Reservation entretients</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href>Accueil</a></li>
              <li class="breadcrumb-item active">Reservation entretient</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
      {/* Formulaire de réservation */}
      <section className="content d-flex justify-content-center align-items-center min-vh-100">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-6">
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">Réservez un entretien</h3>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="card-body">
                    <div className="form-group">
                      <label>Nom</label>
                      <input
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        className={`form-control ${errors.nom ? "is-invalid" : ""}`}
                        placeholder="Votre nom"
                      />
                      {errors.nom && <p className="invalid-feedback">{errors.nom}</p>}
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                        placeholder="Votre email"
                      />
                      {errors.email && <p className="invalid-feedback">{errors.email}</p>}
                    </div>
                    <div className="form-group">
                      <label>Date de l’entretien</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className={`form-control ${errors.date ? "is-invalid" : ""}`}
                      />
                      {errors.date && <div className="invalid-feedback">{errors.date}</div>}
                    </div>
                    <div className="form-group">
                      <label>Mode d’entretien</label>
                      <select
                        name="mode"
                        value={formData.mode}
                        onChange={handleChange}
                        className={`form-control ${errors.mode ? "is-invalid" : ""}`}
                      >
                        <option value="">-- Sélectionnez --</option>
                        <option value="teams">Microsoft Teams</option>
                        <option value="whatsapp">WhatsApp</option>
                        <option value="autre">Autre</option>
                      </select>
                      {errors.mode && <p className="invalid-feedback">{errors.mode}</p>}
                    </div>
                    <div className="card-footer text-center">
                       <button type="button" className="btn btn-primary" onClick={handleConfirmSubmit}>Envoyer</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* Barre de recherche */}
      <section class="content">
            <div class="container-fluid">
        <div className="col-md-3 text-right"> 
        <input
          type="text"
          className="form-control"
          placeholder="Rechercher par nom ou email..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <br/>

      {/* Liste des réservations */}
      <div className="card card-info">
        <div className="card-header">
          <h3 className="card-title">Réservations</h3>
        </div>
        <div className="card-body p-0">
          <table className="table">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Email</th>
                <th>Date</th>
                <th>Mode</th>
              </tr>
            </thead>
            <tbody>
            {filteredReservations.length > 0 ? (
              filteredReservations.map((res, index) => (
                <tr key={index}>
                  <td>{res.nom || "Inconnu"}</td> {/* Évite les valeurs undefined */}
                  <td>{res.email || "Inconnu"}</td>
                  <td>{res.date || "Non précisé"}</td>
                  <td>{res.mode || "Non précisé"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">Aucune réservation trouvée</td>
              </tr>
            )}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </section>

              {/* Modal de confirmation */}
{showConfirmation && (
  <div className="modal fade show d-block" tabIndex="-1">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Confirmation</h5>
          <button type="button" className="close" onClick={() => setShowConfirmation(false)}>
            <span>&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <p>Êtes-vous sûr de vouloir envoyer cette réservation ?</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={() => setShowConfirmation(false)}>Annuler</button>
          <button type="button" className="btn btn-primary" onClick={handleSubmit}>Confirmer</button>
        </div>
      </div>
    </div>
  </div>
)}

    </div>
    
  );
}
