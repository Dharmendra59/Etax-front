import { useState, useEffect } from "react";
import { FaSearch, FaTrash, FaEnvelope, FaPhone, FaSortAlphaDown, FaSortAlphaUp } from "react-icons/fa";
import "./AdminContactUsData.css";

const ContactDataSection = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://qfs-backend-vszx.onrender.com/contact-data/get");
        const result = await response.json();
        setData(result.query || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`https://etax-back-1.onrender.com/contact/contact-data/delete/${id}`, {
        method: "DELETE",
      });
      setData(data.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1;
    if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div className="file-data-section">
      <h2 className="filetext">Contact Data</h2>
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearch} />
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th onClick={() => handleSort("name")}>
                Name {sortColumn === "name" && (sortDirection === "asc" ? <FaSortAlphaDown /> : <FaSortAlphaUp />)}
              </th>
              <th onClick={() => handleSort("mobile")}>
                Mobile {sortColumn === "mobile" && (sortDirection === "asc" ? <FaSortAlphaDown /> : <FaSortAlphaUp />)}
              </th>
              <th onClick={() => handleSort("email")}>
                Email {sortColumn === "email" && (sortDirection === "asc" ? <FaSortAlphaDown /> : <FaSortAlphaUp />)}
              </th>
              <th onClick={() => handleSort("message")}>
                Message {sortColumn === "message" && (sortDirection === "asc" ? <FaSortAlphaDown /> : <FaSortAlphaUp />)}
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.mobile}</td>
                <td>{item.email}</td>
                <td>{item.message}</td>
                <td>
                  <div className="action-buttons">
                    <button className="delete-btn" onClick={() => handleDelete(item._id)}>
                      <FaTrash />
                    </button>
                    <a href={`mailto:${item.email}`} className="contact-btn email-btn">
                      <FaEnvelope />
                    </a>
                    <a href={`tel:${item.mobile}`} className="contact-btn phone-btn">
                      <FaPhone />
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactDataSection;
