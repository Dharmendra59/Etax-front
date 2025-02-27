import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/ReactToastify.css";
import { UserProvider } from "./context/user.context";

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
  );
} else {
  console.error("Root element not found");
}
