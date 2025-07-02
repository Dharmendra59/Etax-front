import { FaDollarSign, FaChartLine, FaPiggyBank } from "react-icons/fa"
import "./chooseUs.css"

const features = [
  {
    icon: <FaDollarSign />,
    title: "Affordable Cost",
    description:
      "Affordable solutions without compromising on expertise, transparency, or care.",
  },
  {
    icon: <FaChartLine />,
    title: "Client Investment",
    description:
      "Trusted guidance to manage, protect, and maximize the value of your investments.",
  },
  {
    icon: <FaPiggyBank />,
    title: "Save Your Money",
    description:
      "Smart strategies designed to reduce your tax burden and help you keep more of what you earn.",
  },
]

export default function ChooseUs() {
  return (
    <section className="choose-us">
      <div className="choose-us-container">
        <div className="content-section">
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title">
            We Deliver Expertise You
            <br />
            Can Trust Our <span className="highlight">Service</span>
          </h2>
          <p className="section-description">
"With proven expertise and a focus on your success, we ensure every service meets the highest standards of quality and care."
          </p>

          <div className="features-list">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="image-section">
          <div className="decorative-element"></div>
          <div className="image-stack">
            <img
              src="https://live.themewild.com/taxrio/assets/img/choose/02.jpg"
              alt="Business meeting"
              width={600}
              height={600}
              className="image-top"
            />
            <img
              src="https://live.themewild.com/taxrio/assets/img/choose/01.jpg"
              alt="Team collaboration"
              width={600}
              height={600}
              className="image-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

