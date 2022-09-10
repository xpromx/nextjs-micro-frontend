import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { getCookies, setCookie, deleteCookie } from "cookies-next";

const COOKIE_TOKEN = "token";
const DUMP_USER = { fistName: "John", lastName: "Doe" };

export type User = { fistName: string; lastName: string } | null;

type AuthContextState = {
  user?: User;
  signIn: () => void;
  signOut: () => void;
  isLoading: boolean;
};

export const AuthContext = createContext<AuthContextState>({
  signIn: () => null,
  signOut: () => null,
  isLoading: false,
});

export const AuthProvider: FC<{ children: ReactNode }> = ({
  children,
  ...props
}) => {
  const [user, setUser] = useState<User>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const cookies = getCookies();
    const token = cookies[COOKIE_TOKEN];

    if (token) {
      setUser(DUMP_USER);
    }

    setIsLoading(false);
  }, []);

  const signIn = () => {
    setCookie(COOKIE_TOKEN, "token-123");
    setUser(DUMP_USER);
  };

  const signOut = () => {
    deleteCookie(COOKIE_TOKEN);
    window.location.href = "/";
  };

  const value = {
    user,
    signIn,
    signOut,
    isLoading,
  };

  return (
    <AuthContext.Provider value={value} {...props}>
      {children}
    </AuthContext.Provider>
  );
};
