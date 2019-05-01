import * as React from "react";
import { createContext } from "react";

interface AppContextInterface {
  logoutUser: () => void;
  loginUser: (user: {}) => void;
  isLoading: boolean;
  user: {
    id?: number | null;
    email?: string | null;
    full_name?: string | null;
  };
  loggedInStatus: string;
}

const CurrentUserContext = createContext<AppContextInterface | null>(null);

export default CurrentUserContext;
