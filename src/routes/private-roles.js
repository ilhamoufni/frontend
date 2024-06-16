import { useAuthContext } from "../auth/hooks/use-auth-context";

export default function PrivateRoute({ element, roles }) {
  const { user } = useAuthContext();

  if (!roles || roles.includes(user?.role)) {
    return element;
  }

  return "You are not able to fetch from this route";
}
