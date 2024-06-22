import "./LoginPopup.css";
import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../auth/hooks/use-auth-context";

const LoginPopup = ({ onLoginSuccess }) => {
  const { login } = useAuthContext();

  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("ilham.ou@gmail.com");
  const [password, setPassword] = useState("ilham12");
  const [rememberMe, setRememberMe] = useState(false);
  const modalRef = useRef();
  const navigate = useNavigate();

  const [isSubmiting, setIsSubmiting] = useState(false);

  const handleLogin = async () => {
    try {
      await login?.({
        email: username,
        password,
      });

      navigate("/documents");
    } catch (err) {
      alert('Le mot de passe que vous avez entré est incorrect.');
      console.log(err);
    }
  };

  /*
  const handleLogin = () => {
    console.log('Connexion avec:',username, password);
    console.log('Mémoriser l\'identifiant:', rememberMe);
    axios.post('http://localhost:3001/api/signin', { email:username, password })
      .then(res => {
        if (res.data.success) {
          onLoginSuccess();
          navigate('/dDocumentsTable');
        } else {
          alert('Mot de passe incorrect');
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Une erreur est survenue lors de la connexion");
      })
      .finally(() => {
        setIsSubmiting(false);
      });
  };
  */

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="button n-button">
        Se connecter
      </button>
      {isOpen && (
        <div className="popup" onClick={handleClickOutside}>
          <div className="popup_inner" ref={modalRef}>
            <h2>Connexion</h2>
            <label>
              Nom d'utilisateur:
              <input
                type="email"
                placeholder="Entrer votre email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label>
              Mot de passe:
              <input
                type="password"
                placeholder="Entrer votre mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button onClick={handleLogin} disabled={isSubmiting}>
              {isSubmiting ? "submiting ..." : " Se connecter"}
            </button>
            <button onClick={() => setIsOpen(false)}>Fermer</button>

            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Mémoriser mon identifiant
            </label>
            <div className="password-forgot">
              <a href="/register">Mot de passe oublié ?</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPopup;
