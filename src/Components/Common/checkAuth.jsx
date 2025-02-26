import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  console.log("Current Path:", location.pathname, "Authenticated:", isAuthenticated, "Role:", user?.role);

  // 🔹 Redirect Unauthenticated Users (Except for Login/Register)
  if (
    !isAuthenticated &&
    !["/login", "/register"].includes(location.pathname)
  ) {
    return <Navigate to="/login" />;
  }

  // 🔹 Prevent Authenticated Users from Visiting Login/Register Again
  if (
    isAuthenticated &&
    ["/login", "/register"].includes(location.pathname)
  ) {
    return <Navigate to={user?.role === "admin" ? "/admin/dashboard" : "/"} />;
  }

  // 🔹 Restrict Admin Routes for Non-Admin Users
  if (isAuthenticated && user?.role !== "admin" && location.pathname.startsWith("/admin")) {
    return <Navigate to="/unauth-page" />;
  }

  // 🔹 Redirect Admins to Dashboard when they try accessing root ("/")
  if (isAuthenticated && user?.role === "admin" && location.pathname === "/") {
    return <Navigate to="/admin/dashboard" />;
  }

  return <>{children}</>;
}

export default CheckAuth;