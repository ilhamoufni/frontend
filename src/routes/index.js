import { createBrowserRouter } from "react-router-dom";
import Intro from "../Components/intro";
import GuestGuard from "../auth/context/guest-guard";
import LoginPopup from "../Components/LoginPopup";
import DashboardLayout from "../layouts/dashboard-layout";
import AuthGuard from "../utils/auth-guard";
import DocumentsTable from "../Components/DocumentsTable";
import PrivateRoute from "./private-roles";

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
    element: <register />,
  },
]);
