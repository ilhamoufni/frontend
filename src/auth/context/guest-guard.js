import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/use-auth-context";
import { useCallback, useEffect } from "react";

export default function GuestGuard({ children }) {
  const router = useNavigate();

  const { authenticated } = useAuthContext();

  const check = useCallback(() => {
    if (authenticated) {
      router("/documents");
    }
  }, [authenticated, router]);

  useEffect(() => {
    check();
  }, [check]);

  return <>{children}</>;
}
