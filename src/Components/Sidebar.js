import React, { useCallback } from "react";
import "./Sidebar.css";
import img2 from "../images/accueil.png";
import img3 from "../images/documents.png";
import img4 from "../images/filtres.png";
import img5 from "../images/eteindre.png";
import img6 from "../images/eleve.png";
import img7 from "../images/map.png"
import { useAuthContext } from "../auth/hooks/use-auth-context";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ user }) => {
  const { logout } = useAuthContext();

  const navigate = useNavigate();

  const handleLogout = useCallback(async () => {
    try {
      await logout();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }, [logout, navigate]);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img 
          src ={img6}
          alt="Profil"
          className="sidebar-profile-image"
        />

        <h3>{user?.name}</h3>
      </div>
      <nav className="sidebar-nav">
        <a href="/accueil" className="sidebar-nav-item component-rectangle">
          <img src={img2} alt="" className="component-icon" />
          Accueil
        </a>

        {["user", "admin", "chef"].includes(user?.role) && (
          <a href="/documents" className="sidebar-nav-item component-rectangle">
            <img src={img3} alt="" className="component-icon" />
            Documents
          </a>
        )}
        <a href="/map" className="sidebar-nav-item component-rectangle">
          <img src={img7} alt="" className="component-icon" />
          Carte de localisation
        </a>

        <a href="/filtre" className="sidebar-nav-item component-rectangle">
          <img src={img4} alt="" className="component-icon" />
          Filtre
        </a>

        <button
          className="sidebar-nav-item component-rectangle"
          onClick={handleLogout}
        >
          <img src={img5} alt="" className="component-icon" />
          Se déconnecter
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
