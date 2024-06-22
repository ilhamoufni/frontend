import React, { useState, useEffect } from 'react';
import './Notifications.css'; // Assurez-vous de créer un fichier Notifications.css dans le même répertoire

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Ici, vous pourriez écouter un événement ou interroger une API pour recevoir des notifications
    // Pour cet exemple, nous allons simuler une nouvelle notification
    const timeoutId = setTimeout(() => {
      setNotifications(prevNotifications => [
        ...prevNotifications,
        "Un responsable a modifié le document XYZ."
      ]);
    }, 5000); // Nouvelle notification après 5 secondes

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="notifications-container">
      <h2>Notifications</h2>
      {notifications.length === 0 ? (
        <p>Aucune nouvelle notification.</p>
      ) : (
        <ul>
          {notifications.map((notification, index) => (
            <li key={index}>{notification}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;