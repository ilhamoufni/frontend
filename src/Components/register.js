import React, { useState } from 'react';
import './ResetPassword.css'; // Assurez-vous de créer un fichier ResetPassword.css dans le même répertoire

const ResetPassword = () => {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez intégrer la logique pour communiquer avec votre backend
    console.log('Le nouveau mot de passe est:', password);
    // Reset le champ après la soumission
    setPassword('');
  };

  return (
    <div className="reset-password-container">
      <form className="reset-password-form" onSubmit={handleSubmit}>
        <h2>Réinitialiser votre mot de passe</h2>
        <div className="form-group">
          <label htmlFor="password">Nouveau mot de passe:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Réinitialiser le mot de passe
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;