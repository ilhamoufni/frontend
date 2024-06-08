import React, { useCallback } from "react";
import "./Sidebar.css";
import img2 from "../images/accueil.png";
import img3 from "../images/documents.png";
import img4 from "../images/filtres.png";
import img5 from "../images/eteindre.png";
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
          src={user?.imageUrl}
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
        <a href="/documents" className="sidebar-nav-item component-rectangle">
          <img src={img3} alt="" className="component-icon" />
          Documents
        </a>
        <a href="/filtre" className="sidebar-nav-item component-rectangle">
          <img src={img4} alt="" className="component-icon" />
          Filtre
        </a>
        <a
          href="javascript:void(0)"
          className="sidebar-nav-item component-rectangle"
          onClick={handleLogout}
        >
          <img src={img5} alt="" className="component-icon" />
          Se déconnecter
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
