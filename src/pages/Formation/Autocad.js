import React from "react";
import { Link  } from "react-router-dom";

const Autocad = () => {
  return (
    <>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Formation Autocad</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <Link to="/"  >
                    <li className="breadcrumb-item">
                      <a href>Accueil / </a>
                    </li>
                  </Link>
                  <li className="breadcrumb-item active">Autocad</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">
                      Vous souhaitez maîtriser AutoCAD et développer vos compétences en Conception Assistée par Ordinateur (CAO)? Notre formation AutoCAD est conçue pour vous !
                    </h3>
                  </div>
                  <div className="card-body">
                    <ul>
                      <li>Petits groupes pour un apprentissage efficace : Avec un maximum de 6 personnes par groupe, bénéficiez d’une attention personnalisée et d’un environnement d’apprentissage intime.</li>
                      <li>Horaires décalés : Nos sessions sont planifiées en soirée et le week-end, vous permettant d’apprendre sans perturber votre emploi du temps actuel.</li>
                      <li>Un environnement d’entraide : Profitez d’une atmosphère conviviale favorisant les échanges et l’entraide entre participants.</li>
                      <li>Des compétences fondamentales en CAO : Acquérez les bases essentielles d’AutoCAD et commencez à créer vos premiers dessins techniques en 2D.</li>
                    </ul>
                    <h5>Prérequis</h5>
                    <ul>
                      <li>Avoir au moins 18 ans</li>
                      <li>Posséder des connaissances bureautiques de base (savoir utiliser un ordinateur)</li>
                      <li>Être motivé à apprendre et à explorer le monde de la CAO</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">
                      <i className="fas fa-text-width"></i> LE PROGRAMME DE FORMATION
                    </h3>
                  </div>
                  <div className="card-body">
                    <p>
                      Ce programme de formation est conçu pour vous offrir une maîtrise solide des fonctionnalités essentielles d'AutoCAD, vous permettant de créer des dessins techniques 2D précis et professionnels. Que vous soyez débutant en CAO ou que vous souhaitiez actualiser vos connaissances, cette formation est faite pour vous !
                    </p>
                    <h5>Vous bénéficierez de :</h5>
                    <ul>
                      <li>Apports théoriques clairs et concis</li>
                      <li>Démonstrations pratiques en direct</li>
                      <li>Exercices variés et corrigés</li>
                      <li>Un support pédagogique complet</li>
                      <li>Un formateur expérimenté et disponible</li>
                    </ul>
                    <h5>À la fin de cette formation, vous serez en mesure de :</h5>
                    <ul>
                      <li>Créer des dessins techniques 2D complets et précis</li>
                      <li>Utiliser efficacement les fonctionnalités d'AutoCAD</li>
                      <li>Communiquer vos idées de manière claire et professionnelle</li>
                    </ul>
                    <h5>Au cours de cette formation, vous apprendrez à :</h5>
                    <ul>
                      <li>Naviguer dans l'interface intuitive d'AutoCAD</li>
                      <li>Créer et gérer des fichiers de dessin</li>
                      <li>Utiliser les outils de dessin de base et avancés</li>
                      <li>Appliquer des cotations et des annotations précises</li>
                      <li>Organiser vos dessins à l'aide de calques et de blocs</li>
                      <li>Générer des sorties de haute qualité, y compris des PDF</li>
                    </ul>
                    <p>
                      Notre programme de formation est structuré et progressif, vous permettant d'acquérir les compétences fondamentales pour dessiner dans AutoCAD.
                    </p>
                    <h5>Tarif Spécial Formation AutoCAD : 1071 € (15% de réduction inclus)</h5>
                    <p>
                      <strong>Format :</strong> Classe virtuelle avec des horaires décalés.
                    </p>
                    <p>
                      <strong>Prix initial :</strong> 1260€.
                    </p>
                    <p>
                      <strong>Réduction :</strong> -189€.
                    </p>
                    <p>
                      <strong>Prix final :</strong> 1071€.
                    </p>
                    <p>
                      <strong>Options de paiement :</strong> Paiement intégral ou en quatre versements via PayPal.
                    </p>
                    <p>
                      Profitez de cette offre limitée pour développer vos compétences en CAO avec notre formation AutoCAD !
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <aside className="control-sidebar control-sidebar-dark"></aside>
    </>
  );
};

export default Autocad;
