"use client"

import { useState } from "react"
import { FaSearch, FaTrash, FaEnvelope, FaPhone, FaFile, FaSortAlphaDown, FaSortAlphaUp } from "react-icons/fa"
import "./AdminContactUsData.css"

const initialData = [
  {
    id: 1,
    name: "John Doe",
    mobile: "123-456-7890",
    email: "john@example.com",
    query: "Tax inquiry",
  },
  {
    id: 2,
    name: "Jane Smith",
    mobile: "987-654-3210",
    email: "jane@example.com",
    query: "Account status",
  },
  {
    id: 3,
    name: "Bob Johnson",
    mobile: "555-123-4567",
    email: "bob@example.com",
    query: "Payment issue",
  },
  // Add more sample data as needed
]

const ContactDataSection = () => {
  const [data, setData] = useState(initialData)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortColumn, setSortColumn] = useState("")
  const [sortDirection, setSortDirection] = useState("asc")

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) => value.toString().toLowerCase().includes(searchTerm.toLowerCase())),
  )

  const sortedData = [...filteredData].sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1
    if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1
    return 0
  })

  

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
              <th onClick={() => handleSort("query")}>
                Query {sortColumn === "query" && (sortDirection === "asc" ? <FaSortAlphaDown /> : <FaSortAlphaUp />)}
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.mobile}</td>
                <td>{item.email}</td>
                <td>{item.query}</td>
                <td>
                  <div className="action-buttons">
                    <button className="delete-btn" onClick={() => handleDelete(item.id)}>
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
  )
}

export default ContactDataSection

