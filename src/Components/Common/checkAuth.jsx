import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  console.log("Current Path:", location.pathname, "Authenticated:", isAuthenticated, "Role:", user?.role);

  // 🔹 If Not Authenticated → Allow Public Routes
  if (!isAuthenticated) {
    return <>{children}</>;
  }

  // 🔹 If Authenticated & User is Admin → Redirect from "/" to Admin Dashboard
  if (isAuthenticated && user?.role === "admin" && location.pathname === "/") {
    return <Navigate to="/admin/dashboard" />;
  }

  // 🔹 If Authenticated & User is Admin → Block Access to "/" Routes
  if (isAuthenticated && user?.role === "admin" && !location.pathname.startsWith("/admin")) {
    return <Navigate to="/admin/dashboard" />;
  }

  // 🔹 If Authenticated & User is Not Admin → Block Admin Routes
  if (isAuthenticated && user?.role !== "admin" && location.pathname.startsWith("/admin")) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}

export default CheckAuth;