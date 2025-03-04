import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SideNav from "./components/SideNav";
import Apropos from "./pages/Apropos"; // Page À propos
import Contact from "./pages/Contact"; 
import Autocad from "./pages/Formation/Autocad"; 
import Reservezentretients from "./pages/Inscription/Reservezentretients"; 
import Choisissezsession from "./pages/Inscription/Choisissezsession"; 
import Calendrier from "./pages/Calendrier";
function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <SideNav />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/calendrier" element={<Calendrier />} />
            <Route path="/autocad" element={<Autocad />} />
            <Route path="/reservezentretients" element={<Reservezentretients />} />
            <Route path="/choisissezsession" element={<Choisissezsession />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
