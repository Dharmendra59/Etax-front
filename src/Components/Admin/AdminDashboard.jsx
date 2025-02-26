import { useNavigate } from "react-router-dom"
import { FaHome, FaUser, FaUsers, FaFileAlt, FaAddressBook, FaCog, FaSignOutAlt } from "react-icons/fa"
import "./AdminDashboard.css"

const DashboardCard = ({ icon: Icon, title, path, color }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    if (title === "Logout") {
      // Handle logout logic here
      console.log("Logging out...")
      localStorage.removeItem('token');
      localStorage.removeItem('LoggedInUser');
      window.location.href = '/login';
    } else {
      navigate(path)
    }
  }
  

  return (
    <div className="dashboard-card" style={{ backgroundColor: color }} onClick={handleClick}>
      <Icon className="card-icon" />
      <h3>{title}</h3>
    </div>
  )
}

const AdminDashboard = () => {
  // const handleLogout = () => {
  //   localStorage.removeItem('token');
  //   localStorage.removeItem('LoggedInUser');
  //   window.location.href = '/login';
  // };
  const cards = [
    { icon: FaHome, title: "Home", path: "/", color: "#3498db" },
    { icon: FaUser, title: "Profile", path: "/admin/admin-profile", color: "#2ecc71" },
    { icon: FaUsers, title: "Users", path: "/admin/users", color: "#e74c3c" },
    { icon: FaFileAlt, title: "File Data", path: "/admin/file-data", color: "#f39c12" },
    { icon: FaAddressBook, title: "Contact Data", path: "/admin/contact-data", color: "#9b59b6" },
    { icon: FaCog, title: "Settings", path: "/settings", color: "#34495e" },
    { icon: FaSignOutAlt, title: "Logout", path: "/logout", color: "#7f8c8d" },
  ]
  

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="dashboard-grid">
        {cards.map((card, index) => (
          <DashboardCard key={index} {...card} />
        ))}
      </div>
    </div>
  )
}

export default AdminDashboard

