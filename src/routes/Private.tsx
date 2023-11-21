import { ReactNode, useContext } from "react";
import { AuthContext } from "../context";
import { Navigate } from "react-router-dom";

interface PrivateProps {
  children: ReactNode;
}

const Private = ({ children }: PrivateProps) => {
  const { signed } = useContext(AuthContext);

  if (!signed) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default Private;
