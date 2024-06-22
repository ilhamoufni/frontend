import { createBrowserRouter } from "react-router-dom";
import Intro from "../Components/intro";
import GuestGuard from "../auth/context/guest-guard";
import LoginPopup from "../Components/LoginPopup";
import MapComponent from "../Components/map";
import DashboardLayout from "../layouts/dashboard-layout";
import AuthGuard from "../utils/auth-guard";
import DocumentsTable from "../Components/DocumentsTable";
import PrivateRoute from "./private-roles";
import FilterComponent from "../Components/filtre";
import ResetPassword from "../Components/register";
import Notifications from "../Components/Notifications";
import CreateAccount from "../Components/CreateAccount";
// import { router } from "./routes"

export const router = createBrowserRouter([
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
          <PrivateRoute
            element={<DocumentsTable />}
            roles={["user", "admin", "chef"]}
          />
        </AuthGuard>
      </DashboardLayout>
    ),
  },
  {
    path: "/register",
    element: <ResetPassword />,
  },
  {
    path: "/map",
    element: (
      <DashboardLayout>
        <AuthGuard>
          <PrivateRoute
            element={<MapComponent />}
            roles={["user", "admin", "chef"]}
          />
        </AuthGuard>
      </DashboardLayout>
    ),
  },
  {
    path: "/filtre",
    element: <FilterComponent />,
  },
  {
    path: "/nvcompte",
    element: <CreateAccount />,
  },
  {
    path: "/Notifications",
    element: <Notifications />,
  },
]);
