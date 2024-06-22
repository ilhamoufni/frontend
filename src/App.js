
// export default 
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./auth/context/auth-provider";
import { AuthConsumer } from "./auth/context/auth-consumer";
import GuestGuard from "./auth/context/guest-guard";
import DashboardLayout from "./layouts/dashboard-layout";
import { router } from "./routes"
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Intro />,
//   },
//   {
//     path: "/login",
//     element: (
//       <GuestGuard>
//         <LoginPopup />,
//       </GuestGuard>
//     ),
//   },
//   {
//     path: "/documents",
//     element: (
//       <DashboardLayout>
//         <AuthGuard>
//           <DocumentsTable />
//         </AuthGuard>
//       </DashboardLayout>
//     ),
//   },
//   {
//     path: "/map",
//     element: (
//       <DashboardLayout>
//         <AuthGuard>
//           <MapComponent /> 
//         </AuthGuard>
//       </DashboardLayout>
//     ),
//   },
//   {
//     path: "/register",
//     element: <register />,
//   },
// ])


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
