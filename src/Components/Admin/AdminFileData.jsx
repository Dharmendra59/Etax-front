import { useState, useEffect } from "react";
import { 
  FaSearch, 
  FaTrash, 
  FaEnvelope, 
  FaPhone, 
  FaSortAlphaDown, 
  FaSortAlphaUp, 
  FaFile 
} from "react-icons/fa";
import "./AdminContactUsData.css";

const ContactDataSection = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://qfs-backend-vszx.onrender.com/api/download-files");
        const result = await response.json();
        console.log("API Response:", result);
        setData(result.data || []);
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
      await fetch(`https://qfs-backend-vszx.onrender.com/file/file_submit/delete/${id}`, {
        method: "DELETE",
      });
      setData(data.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortColumn) return 0;
    if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1;
    if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  const handleViewAndDownload = (fileUrl) => {
    // ✅ ALWAYS open in a new tab only
    window.open(fileUrl, '_blank');
  };

  return (
    <div className="file-data-section">
      <h2 className="filetext">ITR File Data</h2>
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
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
              <th onClick={() => handleSort("fileName")}>
                File Name {sortColumn === "fileName" && (sortDirection === "asc" ? <FaSortAlphaDown /> : <FaSortAlphaUp />)}
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
                <td>{item.fileName || "N/A"}</td>
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
                    <button
                      className="file-btn"
                      onClick={() =>
                        handleViewAndDownload(
                          `https://qfs-backend-vszx.onrender.com${item.filePath}`
                        )
                      }
                    >
                      <FaFile />
                    </button>
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
