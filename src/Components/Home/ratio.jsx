import { FaProjectDiagram, FaSmile, FaUserTie, FaTrophy } from "react-icons/fa"
import "./ratio.css"

const statsData = [
  {
    icon: <FaProjectDiagram />,
    number: "150k",
    label: "Projects Done",
  },
  {
    icon: <FaSmile />,
    number: "25K",
    label: "Happy Clients",
  },
  {
    icon: <FaUserTie />,
    number: "120+",
    label: "Experts Staff",
  },
  {
    icon: <FaTrophy />,
    number: "50+",
    label: "Win Awards",
  },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats-container">
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="icon-circle">{stat.icon}</div>
              <div className="stat-content">
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="background-curves"></div>
    </section>
  )
}

