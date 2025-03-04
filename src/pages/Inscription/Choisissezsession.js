import React from "react";


const Choisissezsession = () => {
  return (
    <div>
  <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Choisissez votre session</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href>Accueil</a></li>
              <li class="breadcrumb-item active">Choisissezsession</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
    <section class="content">
    <div class="col-md-12">
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Sélectionnez la période qui vous convient le mieux.</h3>
              </div>
              <div class="card-body">

                <div class="form-group">
                  <label>Formation</label>
                  <select class="form-control select2" >
                    <option selected="selected">Autocad</option>
                    <option disabled="disabled">Revit (en cours)</option>
                    <option disabled="disabled">SketchUp (en cours)</option>
                  </select>
                </div>

                <div className="form-group">
                      <label>Date de debut :</label>
                      <input
                        type="date"
                        name="date"
                        className={`form-control "is-invalid" : ""}`}
                      />
                </div>
                <div className="form-group">
                      <label>Date de fin :</label>
                      <input
                        type="date"
                        name="date"
                        className={`form-control "is-invalid" : ""}`}
                      />
                </div>
                <div class="card-footer text-center">
                    <button type="submit" class="btn btn-info d-inline-block">Valider</button>
                    <button type="submit" class="btn btn-default d-inline-block">Cancel</button>
                </div>
              </div>     
            </div>
            </div>
    </section>
    <section class="content">
      <div class="container-fluid">
    <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Liste des formers par période choissi</h3>

                <div class="card-tools">
                  <div class="input-group input-group-sm" >
                    <input type="text" name="table_search" class="form-control float-right" placeholder="Search"/>

                    <div class="input-group-append">
                      <button type="submit" class="btn btn-default">
                        <i class="fas fa-search"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body table-responsive p-0" >
                <table class="table table-head-fixed text-nowrap">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Formation</th>
                      <th>Date debut</th>
                      <th>Date fin</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Autocad</td>
                      <td>11-7-2024</td>
                      <td>11-7-2025</td>
                      <td><span class="badge bg-warning">En cours</span></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Autocad</td>
                      <td>11-7-2014</td>
                      <td>11-7-2025</td>
                      <td><span class="badge bg-danger">Refuser</span></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Autocad</td>
                      <td>11-7-2024</td>
                      <td>11-7-2024</td>
                      <td><span class="badge bg-success">Valider</span></td>
                    </tr>
                  </tbody>
                </table>
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
export default Choisissezsession;