
// export default App;
<<<<<<< HEAD
import { createBrowserRouter, RouterProvider } from "react-router-dom";
=======
import {  RouterProvider } from "react-router-dom";
>>>>>>> ec28b10f5da089291029e45aa33c947abb9ab5c3

import { AuthProvider } from "./auth/context/auth-provider";
import { AuthConsumer } from "./auth/context/auth-consumer";
<<<<<<< HEAD
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
=======
import { router } from "./routes";


>>>>>>> ec28b10f5da089291029e45aa33c947abb9ab5c3

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
