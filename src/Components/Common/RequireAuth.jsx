import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useUser } from "../../context/user.context";

const RequireAuth = ({ children }) => {
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", {
        state: {
          from: location.pathname,
          message: "Please login first to continue"
        }
      });
    }
  }, [isAuthenticated, navigate, location]);

  return isAuthenticated ? children : null;
};

export default RequireAuth;
