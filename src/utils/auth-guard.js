import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../auth/hooks/use-auth-context";
import { useCallback, useEffect, useState } from "react";

export default function AuthGuard({ children }) {
  const router = useNavigate();

  const { authenticated } = useAuthContext();

  const [checked, setChecked] = useState(false);

  const check = useCallback(() => {
    console.log(authenticated);

    if (!authenticated) {
      router('/login');
    } else {
      setChecked(true);
    }
  }, [authenticated]);

  useEffect(() => {
    check();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!checked) {
    return null;
  }

  return <>{children}</>;
}
