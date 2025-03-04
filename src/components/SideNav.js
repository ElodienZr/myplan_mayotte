import React from "react";
import { Link, useLocation  } from "react-router-dom";

// import AuthContext from "../../src/context/AuthContext";

function SideNav() {
  const location = useLocation();
  // const { user } = useContext(AuthContext);
  return (
    <div>
        {/* Main Sidebar Container */}
      <aside className="main-sidebar sidebar-dark-info elevation-4">
        {/* Brand Logo */}
        <Link to="/"  className="brand-link">
          <img src="logo_mayplan.jpg" alt="Mayplan" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
          <span className="brand-text font-weight-light">Mayplan | Mayotte </span>
        </Link>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src="dist/img/user5-128x128.jpg" className="img-circle elevation-2" alt="User" />
            </div>
            <div className="info">
              <a href className="d-block">Aïchat GERA</a>
            </div>
          </div>
      {/* SidebarSearch Form */}
      <div className="form-inline">
        <div className="input-group" data-widget="sidebar-search">
          <input className="form-control form-control-sidebar" type="search" placeholder="Chercher" aria-label="Search" />
          <div className="input-group-append">
            <button className="btn btn-sidebar">
              <i className="fas fa-search fa-fw" />
            </button>
          </div>
        </div>
      </div>
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon class
          with font-awesome or any other icon font library */}
          <li className="nav-item menu-open">
            <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
       
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
                Tableau de bord
              </p>
            </Link>
          </li>
          {/* <li className="nav-item">
            <a href="pages/widgets.html" className="nav-link">
              <i className="nav-icon fas fa-th" />
              <p>
                Widgets
                <span className="right badge badge-danger">New</span>
              </p>
            </a>
          </li> */}
          <li className="nav-item">
            <a href className="nav-link">
              <i className="nav-icon fas fa-copy" />
              <p>
                Formation
                <i className="fas fa-angle-left right" />
                <span className="badge badge-info right">3</span>
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
              <Link to="/autocad" className={`nav-link ${location.pathname === "/autocad" ? "active" : ""}`}>
                 <i className="far fa-circle nav-icon" />
                  <p>Autocad</p>
                </Link>
              </li>
              <li className="nav-item">
                <a href className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Revit</p>
                </a>
              </li>
              <li className="nav-item">
                <a href className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>SketchUp</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href className="nav-link">
              <i className="nav-icon fas fa-chart-pie" />
              <p>
                Cursus
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Section 1</p>
                </a>
              </li>
              <li className="nav-item">
                <a href className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Section 2</p>
                </a>
              </li>
              <li className="nav-item">
                <a href className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Section 3</p>
                </a>
              </li>
              <li className="nav-item">
                <a href className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Section 4</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href className="nav-link">
              <i className="nav-icon fas fa-edit" />
              <p>
                Inscription
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
               <Link to="/reservezentretients" className={`nav-link ${location.pathname === "/reservezentretients" ? "active" : ""}`}>
                  <i className="far fa-circle nav-icon" />
                  <p>Réservez entretiens</p>
                </Link>
              </li>
              <li className="nav-item">
              <Link to="/choisissezsession" className={`nav-link ${location.pathname === "/choisissezsession" ? "active" : ""}`}>
                  <i className="far fa-circle nav-icon" />
                  <p>Choisissez session</p>
              </Link>
              </li>
              <li className="nav-item">
                <a href className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Débutez formation</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-header">EMPLOI DU TEMPS</li>
          <li className="nav-item">
          <Link to="/calendrier" className={`nav-link ${location.pathname === "/calendrier" ? "active" : ""}`}>
              <i className="nav-icon far fa-calendar-alt" />
              <p>
                Calendrier
                <span className="badge badge-info right"></span>
              </p>
          </Link>
          </li>
          <li className="nav-header">A propos</li>
          <li className="nav-item">
            
          <Link to="/apropos" className={`nav-link ${location.pathname === "/apropos" ? "active" : ""}`}>
            <i className="nav-icon far fa-circle text-danger" />
            <p className="text">Mayplan Mayotte</p>
          </Link>
            
          </li>
          <li className="nav-item">
          <Link to="/contact" className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}>
             <i className="nav-icon far fa-circle text-warning" />
              <p>Contact</p>
            </Link>
          </li>
        
        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>

    </div>
  );
}

export default SideNav;
