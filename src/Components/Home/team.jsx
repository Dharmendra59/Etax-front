import React, { useState } from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";
import "./team.css";

// Import all images dynamically from assets/team folder
const images = import.meta.glob('../../assets/team/*.{jpg,jpeg,png,webp,gif,svg}', { eager: true, import: 'default' });

const importImage = (name) => {
  return images[`../../assets/team/${name}.jpg`] ||
         images[`../../assets/team/${name}.jpeg`] ||
         images[`../../assets/team/${name}.png`] ||
         images[`../../assets/team/${name}.webp`] ||
         images[`../../assets/team/${name}.gif`] ||
         images[`../../assets/team/${name}.svg`] ||
         "/placeholder.svg"; // fallback if not found
};

const TeamSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const membersPerPage = 6;

  const teamMembers = [
    {
      id: 1,
      name: "Amit Gupta",
      role: "CA",
      image: importImage('amit'),  // Replace with correct filename
      bio: "Amit has over 10 years of experience in financial strategy and planning.",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
        email: "mailto:amit@example.com",
      },
    },
    {
      id: 2,
      name: "Shivangi Jaiswal",
      role: "CA",
      image: importImage('shivangi'),  // Replace with correct filename
      bio: "Shivangi is an expert in corporate tax and compliance.",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
        email: "mailto:shivangi@example.com",
      },
    },
    {
      id: 3,
      name: "Ali Nawaz",
      role: "Advisor",
      image: importImage('ali'),
      bio: "Income Tax filing, GST filing, appeal and GST related issues.",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
        email: "mailto:ali@example.com",
      },
    },
    {
      id: 4,
      name: "Aun Abbas",
      role: "Advisor",
      image: importImage('aun'),
      bio: "Income Tax filing, GST filing, appeal and GST related issues.",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
        email: "mailto:aun@example.com",
      },
    },
    {
      id: 4,
      name: "Salil Gautam",
      role: "Acc",
      image: importImage('salil'),
      bio: "ITR Written Filing, Finalization of books of accounts, and GST filing.",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
        email: "mailto:aun@example.com",
      },
    },
    {
      id: 4,
      name: "Nancy Gupta",
      role: "Advisor",
      image: importImage('nancy'),
      bio: "ITR Written Filing, Finalization of books of accounts, and GST filing.",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
        email: "mailto:aun@example.com",
      },
    },
    {
      id: 4,
      name: "Deepika Rajpoot",
      role: "Advisor",
      image: importImage('deepika'),
      bio: "Administrative Work, Client Management",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
        email: "mailto:aun@example.com",
      },
    },
    {
      id: 4,
      name: "Shahana Mansuri",
      role: "Advisor",
      image: importImage('nancy'),
      bio: "Finalization of books of accounts, and GST filing & accounts booking.",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
        email: "mailto:aun@example.com",
      },
    },
    {
      id: 4,
      name: "Abhishek Gupta",
      role: "Acc",
      image: importImage('aun'),
      bio: "Aun is an expert in legal compliance and governance.",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
        email: "mailto:aun@example.com",
      },
    },
    // Add more members as needed...
  ];

  const totalPages = Math.ceil(teamMembers.length / membersPerPage);
  const startIndex = (currentPage - 1) * membersPerPage;
  const selectedMembers = teamMembers.slice(startIndex, startIndex + membersPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <section className="team-section">
      <div className="team-container">
        <div className="team-header">
          <h2>Meet Our Team</h2>
          <p>We're a diverse group of passionate individuals working together to create amazing products.</p>
        </div>

        <div className="team-grid">
          {selectedMembers.map((member) => (
            <div className="team-card" key={member.id}>
              <div className="member-image-container">
                <img src={member.image} alt={member.name} className="member-image" />
                <div className="member-socials">
                  <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                  <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
                  <a href={member.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                  <a href={member.socials.email} aria-label="Email"><FaEnvelope /></a>
                </div>
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <h4>{member.role}</h4>
                <p>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination-buttons">
          <button onClick={handlePrev} disabled={currentPage === 1}>Previous</button>
          <span>Page {currentPage} of {totalPages}</span>
          <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
