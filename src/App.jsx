import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import FrontLayout from "./Pages/FrontLayout";
import CheckAuth from "./Components/Common/checkAuth";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import LogIn from "./Pages/LogIn";
import Password from "./Pages/Password";
import Register from "./Pages/Registration";
import Blogs from "./Pages/Blogs";
import Get from "./Pages/GetStarted";
//admin routes..
import AdminLayout from "./Components/Admin/AdminLayout";
import Dashboard from "./Components/Admin/AdminDashboard";
import FileData from "./Components/Admin/AdminFileData";
import ContactData from "./Components/Admin/AdminContactUsData";
import AdminProfile from "./Components/Admin/AdminProfile";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState({})
  console.log(user)

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    }

    axios
      .get("http://localhost:3000/auth/checkauth")
      .then((response) => {
        setIsAuthenticated(true)
        setUser(response.data.user)

      })
      .catch((error) => {
        console.error("Error:", error.response?.data || error.message);
      });
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <FrontLayout />
            </CheckAuth>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<LogIn />} />
          <Route path="password" element={<Password />} />
          <Route path="register" element={<Register />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="get-started" element={<Get />} />
        </Route>

        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="file-data" element={<FileData />} />
          <Route path="contact-data" element={<ContactData />} />
          <Route path="admin-profile" element={<AdminProfile user={user} />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;