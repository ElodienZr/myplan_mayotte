import React from "react";

const Contact = () => {
  return (
    <div>
  <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Contacts</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href>Tableau de bord</a></li>
              <li class="breadcrumb-item active">Contacts</li>
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
                  Mayplan Mayotte
                </div>
                <div class="card-body pt-0">
                  <div class="row">
                    <div class="col-7">
                      <h2 class="lead"><b>Aîchat GERA</b></h2>
                      <p class="text-muted text-sm"><b>Heure d'appel: </b> Appelez-nous du lundi au vendredi de 17h30 à 22h00. Le samedi et dimanche de 09h00 à 17h00 </p>
                      <p class="text-muted text-sm"><b>Par Email: </b> Préférez-vous écrire ? Nous nous engageons à vous répondre dans les meilleurs délais.</p>
                      <ul class="ml-4 mb-0 fa-ul text-muted">
                        <li class="small"><span class="fa-li"><i class="fas fa-lg fa-building"></i></span> E-mail: mayplan@outlook.fr</li>
                        <li class="small"><span class="fa-li"><i class="fas fa-lg fa-phone"></i></span> Phone #: 0658 98 42 24</li>
                      </ul>
                    </div>
                    <div class="col-5 text-center">
                      <img src="../../dist/img/user1-128x128.jpg" alt="user-avatar" class="img-circle img-fluid"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
       
      </div>
    {/* /.card */}


    </section>
    
  </div>

    </div>
  );
};
export default Contact;