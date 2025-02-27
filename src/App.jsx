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
import { useUser } from "./context/user.context";
import Profile from "./Pages/Profile";
import Images from './Pages/Images';
import Videos_section from './Pages/VideoSec';

// notfound
import NotFound from "./Components/Common/notFound";

const App = () => {

  const user = useUser()

  console.log(user)

  useEffect(() => { 
    const token = localStorage.getItem("token");

    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    }

    axios
      .get("http://localhost:3000/auth/checkauth")
      .then((response) => {
        user.login(response.data.user)

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
            <CheckAuth isAuthenticated={user.isAuthenticated} user={user.user}>
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
          <Route path="profile" element={user.isAuthenticated ? <Profile /> : <NotFound />} /> 
          <Route path="get-started" element={<Get />} />
          <Route path="images" element={<Images />} />
          <Route path="videos" element={<Videos_section />} />
        </Route>

        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={user.isAuthenticated} user={user.user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="file-data" element={<FileData />} />
          <Route path="contact-data" element={<ContactData />} />
          <Route path="admin-profile" element={<AdminProfile />} />
        </Route>

          <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  );
};

export default App;