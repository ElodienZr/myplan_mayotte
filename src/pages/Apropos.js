import React from "react";

const Apropos = () => {
  return (
<div>
<div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>A propos</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href>Tableau de bord</a></li>
              <li class="breadcrumb-item active">A propos</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <section class="content">

      <div class="card card-solid">
        <div class="card-body pb-0">
          <div class="row">
            <div class="col-12 col-sm-6 col-md-12 d-flex align-items-stretch flex-column">
              <div class="card bg-light d-flex flex-fill">
                <div class="card-header text-muted border-bottom-0">
                <h1 className="text-primary">À Propos de Mayplan Mayotte</h1>
                <p>
                  Mayplan Mayotte est une plateforme dédiée à la formation et à l’accompagnement
                  professionnel. Nous proposons des cursus spécialisés dans plusieurs domaines,
                  notamment l’architecture, le design et la gestion de projet.
                </p>

                <h2>🌍 Qui sommes-nous ?</h2>
                <p>
                  Notre mission est d'offrir des formations adaptées aux besoins du marché et de
                  faciliter l’insertion professionnelle de nos apprenants.
                </p>

                <h2>📚 Nos formations</h2>
                <ul>
                  <li>✅ Autocad – Conception 2D et 3D</li>
                  <li>✅ Revit – Modélisation BIM</li>
                  <li>✅ SketchUp – Modélisation 3D intuitive</li>
                  <li>✅ Gestion de projet – Outils et méthodes</li>
                </ul>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </section>
    
  </div>
</div>


  );
};

export default Apropos;
