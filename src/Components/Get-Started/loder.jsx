// src/components/Loader.jsx
import React from "react";
import "./loder.css";
import { FaSpinner } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-container">
        <div className="loader-spinner">
          <FaSpinner className="spinner-icon" />
        </div>
        <p className="loader-text">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
