import React, { useState } from "react"
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa"
import "./team.css"

const TeamSection = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const membersPerPage = 6

  const teamMembers = [
    {
      id: 1,
      name: "Amit Gupta",
      role: "CA",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Sarah has over 10 years of experience in software development and business leadership.",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
        email: "mailto:sarah@example.com",
      },
    },
    {
      id: 2,
      name: "Shivangi Jaiswal",
      role: "CA",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Michael is an expert in cloud architecture and leads our technical strategy.",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
        email: "mailto:michael@example.com",
      },
    },
    {
      id: 3,
      name: "Ali Nawaz",
      role: "Advisor",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Priya brings creative vision to our products with her background in UX/UI design.",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
        email: "mailto:priya@example.com",
      },
    },
    {
      id: 4,
      name: "Aun Abbas",
      role: "Advisor",
      image: "/placeholder.svg?height=300&width=300",
      bio: "James specializes in frontend development and has contributed to numerous open-source projects.",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
        email: "mailto:james@example.com",
      },
    },
    {
      id: 5,
      name: "Salil Gautam",
      role: "Acc",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Elena drives our marketing strategy with her innovative approach to digital marketing.",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
        email: "mailto:elena@example.com",
      },
    },
    {
      id: 6,
      name: "Nancy Gupta",
      role: "Advisor",
      image: "/placeholder.svg?height=300&width=300",
      bio: "David oversees product development and ensures we deliver exceptional user experiences.",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
        email: "mailto:david@example.com",
      },
    },
    {
      id: 7,
      name: "Deepika Rajpoot",
      role: "Advisor",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Nina ensures all products meet our high-quality standards through thorough testing.",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
        email: "mailto:nina@example.com",
      },
    },
    {
      id: 8,
      name: "Shahana Mansuri",
      role: "Advisor",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Alex maintains smooth deployments and robust infrastructure.",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
        email: "mailto:alex@example.com",
      },
    },
    {
      id: 9,
      name: "Abhishek Gupta",
      role: "Acc",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Alex maintains smooth deployments and robust infrastructure.",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
        email: "mailto:alex@example.com",
      },
    },
    {
      id: 10,
      name: "Khizra",
      role: "Acc",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Alex maintains smooth deployments and robust infrastructure.",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
        email: "mailto:alex@example.com",
      },
    },
    {
      id: 11,
      name: "Sakshi",
      role: "Acc",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Alex maintains smooth deployments and robust infrastructure.",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
        email: "mailto:alex@example.com",
      },
    },
    {
      id: 12,
      name: "Nitin Gupta",
      role: "Acc",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Alex maintains smooth deployments and robust infrastructure.",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
        email: "mailto:alex@example.com",
      },
    },
    {
      id: 13,
      name: "Abhishek Singh",
      role: "Acc",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Alex maintains smooth deployments and robust infrastructure.",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
        email: "mailto:alex@example.com",
      },
    },
    {
      id: 14,
      name: "Kripa Shankar",
      role: "Acc",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Alex maintains smooth deployments and robust infrastructure.",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
        email: "mailto:alex@example.com",
      },
    },
    {
      id: 15,
      name: "Neeraj Tiwari",
      role: "Acc",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Alex maintains smooth deployments and robust infrastructure.",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
        email: "mailto:alex@example.com",
      },
    },
    {
      id: 16,
      name: "Ajay Kumar Tiwari",
      role: "Acc",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Alex maintains smooth deployments and robust infrastructure.",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
        email: "mailto:alex@example.com",
      },
    },
  ]

  const totalPages = Math.ceil(teamMembers.length / membersPerPage)
  const startIndex = (currentPage - 1) * membersPerPage
  const selectedMembers = teamMembers.slice(startIndex, startIndex + membersPerPage)

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

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
                <img src={member.image || "/placeholder.svg"} alt={member.name} className="member-image" />
                <div className="member-socials">
                  <a href={member.socials.linkedin} aria-label="LinkedIn"><FaLinkedin /></a>
                  <a href={member.socials.twitter} aria-label="Twitter"><FaTwitter /></a>
                  <a href={member.socials.github} aria-label="GitHub"><FaGithub /></a>
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
  )
}

export default TeamSection
