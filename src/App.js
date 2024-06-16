
// export default App;
import {  RouterProvider } from "react-router-dom";

import { AuthProvider } from "./auth/context/auth-provider";
import { AuthConsumer } from "./auth/context/auth-consumer";
import { router } from "./routes";



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
