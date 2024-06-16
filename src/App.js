// import './App.css';
// import React , { useState }from "react";
// import Navbar from "./Components/navbar";
// import Intro from "./Components/intro";
// import DocumentsTable from "./Components/DocumentsTable";
// import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
// import axios from 'axios';

// function App() {
//   const [loggedIn, setLoggedIn] = useState(false);

//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={
//           loggedIn ? <DocumentsTable /> : <Intro onLoginSuccess={() => setLoggedIn(true)} />
//         } />
//         {/* Ajoutez d'autres routes si nécessaire */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Intro from "./Components/intro";
import LoginPopup from "./Components/LoginPopup";
import DocumentsTable from "./Components/DocumentsTable";
import { AuthProvider } from "./auth/context/auth-provider";
import AuthGuard from "./utils/auth-guard";
import { AuthConsumer } from "./auth/context/auth-consumer";
import GuestGuard from "./auth/context/guest-guard";
import DashboardLayout from "./layouts/dashboard-layout";
import MapComponent from "./Components/map";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Intro />,
  },
  {
    path: "/login",
    element: (
      <GuestGuard>
        <LoginPopup />,
      </GuestGuard>
    ),
  },
  {
    path: "/documents",
    element: (
      <DashboardLayout>
        <AuthGuard>
          <DocumentsTable />
        </AuthGuard>
      </DashboardLayout>
    ),
  },
  {
    path: "/map",
    element: (
      <DashboardLayout>
        <AuthGuard>
          <MapComponent /> 
        </AuthGuard>
      </DashboardLayout>
    ),
  },
  {
    path: "/register",
    element: <register />,
  },
]);

function App() {
  return (
    <div>
      <AuthProvider>
        <AuthConsumer>
          <RouterProvider router={router} />
        </AuthConsumer>
      </AuthProvider>
    </div>
  );
}
export default App;
