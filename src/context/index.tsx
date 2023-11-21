import { onAuthStateChanged } from "firebase/auth";
import { ReactNode, createContext, useEffect, useState } from "react";
import { auth } from "../services/firebase.config";

type AuthContextData = {
  signed: boolean;
  handleInfoUser: ({ email, name, uid }: UserProps) => void;
  user: UserProps | null;
};

interface AuthProviderProps {
  children: ReactNode;
}

interface UserProps {
  uid: string;
  name: string | null;
  email: string | null;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserProps | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          name: user.displayName,
          email: user.email,
        });
      } else {
        setUser(null);
      }
    });
    return () => {
      unsub();
    };
  }, []);

  const handleInfoUser = ({ email, name, uid }: UserProps) => {
    setUser({
      name,
      uid,
      email,
    });
  };
  return (
    <AuthContext.Provider value={{ signed: !!user, handleInfoUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};
