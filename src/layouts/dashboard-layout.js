import Sidebar from "../Components/Sidebar";
import { useAuthContext } from "../auth/hooks/use-auth-context";

export default function DashboardLayout({ children }) {
  const { user } = useAuthContext();

  return (
    <>
      <div
        style={{
          display: "flex",
        }}
      >
        <Sidebar user={user} />

        <div>{children}</div>
      </div>
    </>
  );
}
