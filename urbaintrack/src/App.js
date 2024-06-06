import React from 'react';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Sidebar from './Components/Sidebar';
import Intro from "./Components/intro";
import LoginPopup from "./Components/LoginPopup";
import DocumentsTable from "./Components/DocumentsTable";
import Register from "./Components/register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Intro/>,
  },
  {
    path: "/login",
    element: <LoginPopup />,
  },
  {
    path: "/documents",
    element: <DocumentsTable />,
  },
  {
    path: "/register",
    element: <Register />, 
  }
]);

function App() {
  
  const user = {
    name: 'Nom Utilisateur',
    imageUrl: '../images/utilisateur.png' 
  };

  return (
    <div className="app">
      <Sidebar user={user} />
      <div className="content">
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;