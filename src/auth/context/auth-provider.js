import { useCallback, useEffect, useMemo, useReducer } from "react";
import axiosInstance from "../../utils/axios";
import { AuthContext } from "./auth-context";
import { setSession } from "../utils/utils";

const initialState = {
  user: null,
  loading: true,
};

const reducer = (state, action) => {
  if (action.type === "INITIAL") {
    return {
      loading: false,
      user: action.payload.user,
    };
  }
  if (action.type === "LOGIN") {
    return {
      ...state,
      user: action.payload.user,
    };
  }

  if (action.type === "LOGOUT") {
    return {
      ...state,
      user: null,
    };
  }
  return state;
};

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const initialize = useCallback(async () => {
    try {
      const response = await axiosInstance.post("/refresh");

      const { user, access_token } = response.data;

      setSession(access_token);

      dispatch({
        type: "INITIAL",
        payload: {
          user,
        },
      });
    } catch (error) {
      dispatch({
        type: "INITIAL",
        payload: {
          user: null,
        },
      });
    }
  }, []);

  useEffect(() => {
    initialize();
  }, [initialize]);

  const login = useCallback(
    async (data) => {
      const url = "/signin";

      const response = await axiosInstance.post(url, data);

      const { user, access_token } = response.data;

      setSession(access_token);

      dispatch({
        type: "LOGIN",
        payload: {
          user,
        },
      });
    },
    [dispatch]
  );

  const logout = useCallback(async () => {
    await axiosInstance.post("/logout");

    dispatch({
      type: "LOGOUT",
    });
  }, []);

  const checkAuthenticated = state.user ? "authenticated" : "unauthenticated";

  const status = state.loading ? "loading" : checkAuthenticated;

  const memoizedValue = useMemo(
    () => ({
      user: state.user,
      loading: status === "loading",
      authenticated: status === "authenticated",
      unauthenticated: status === "unauthenticated",
      //
      login,
      logout,
    }),
    [login, logout, state.user, status]
  );

  return (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  );
}
