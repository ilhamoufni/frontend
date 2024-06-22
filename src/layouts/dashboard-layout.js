import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/navbar";
import { useAuthContext } from "../auth/hooks/use-auth-context";

export default function DashboardLayout({ children }) {
  const { user } = useAuthContext();

  return (
    <>

<Navbar />

      <div
        style={{
          display: "flex",
          height: "calc(100vh - 80px)",
          widht: "100%"
        }}
      >
    
        <Sidebar user={user} />

        <div>{children}</div>
      </div>
    </>
  );
}
