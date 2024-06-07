import { AuthContext } from "./auth-context";

export function AuthConsumer({ children }) {
    return (
      <AuthContext.Consumer>
        {(auth) => (auth.loading ?  <p>Loading ....</p> : children)}
      </AuthContext.Consumer>
    );
  }