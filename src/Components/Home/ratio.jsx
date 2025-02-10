import { useState, useEffect } from "react";
import { FaProjectDiagram, FaSmile, FaUserTie, FaTrophy } from "react-icons/fa";
import "./ratio.css";

const statsData = [
  {
    icon: <FaProjectDiagram />,
    number: 150000, // Use raw numbers for animation
    label: "Projects Done",
  },
  {
    icon: <FaSmile />,
    number: 25000,
    label: "Happy Clients",
  },
  {
    icon: <FaUserTie />,
    number: 120,
    label: "Experts Staff",
  },
  {
    icon: <FaTrophy />,
    number: 50,
    label: "Win Awards",
  },
];

export default function Stats() {
  const [counters, setCounters] = useState(statsData.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.5,
    });

    const target = document.querySelector(".stats");
    if (target) observer.observe(target);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const incrementCounters = () => {
        const interval = setInterval(() => {
          setCounters((prevCounters) =>
            prevCounters.map((value, index) => {
              const target = statsData[index].number;
              const increment = Math.ceil(target / 100); // Increment in steps
              return value < target ? Math.min(value + increment, target) : value;
            })
          );
        }, 30);

        setTimeout(() => clearInterval(interval), 3000); // Clear interval after animation
      };

      incrementCounters();
    }
  }, [isVisible]);

  return (
    <section className="stats">
      <div className="stats-container">
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div key={index} className="stats-card">
              <div className="icon-cirle">{stat.icon}</div>
              <div className="stat-content">
                <h3 className="stat-number">{counters[index]}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="background-curves"></div>
    </section>
  );
}
