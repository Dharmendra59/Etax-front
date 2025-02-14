import {
  FaEnvelope,
  FaDropbox,
  FaPaypal,
  FaComments,
  FaDiscord,
  FaShopify,
  FaCog,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa"
import "./blog-hero.css"

export default function Workflow() {
  return (
    <section className="workflow">
      <div className="workflow-container">
        {/* Left Column */}
        <div className="left-column">
          <div className="card-row first-row">
            <div className="service-card">
              <div className="icon-wrapper gmail">
                <FaEnvelope />
              </div>
              <span>Emailing</span>
            </div>
            <div className="service-card">
              <div className="icon-wrapper paypal">
                <FaPaypal />
              </div>
              <span>Billing</span>
            </div>
          </div>

          <div className="card-row second-row">
            <div className="service-card">
              <div className="icon-wrapper dropbox">
                <FaDropbox />
              </div>
              <span>Storage</span>
            </div>
            <div className="service-card">
              <div className="icon-wrapper messages">
                <FaComments />
              </div>
              <span>Texting</span>
            </div>
          </div>

          <div className="card-row third-row">
            <div className="service-card">
              <div className="icon-wrapper discord">
                <FaDiscord />
              </div>
              <span>Voicemail</span>
            </div>
            <div className="service-card">
              <div className="icon-wrapper shopify">
                <FaShopify />
              </div>
              <span>Marketing</span>
            </div>
            <div className="service-card">
              <div className="icon-wrapper manage">
                <FaCog />
              </div>
              <span>Manage</span>
            </div>
          </div>
        </div>

        {/* Center Icon */}
        <div className="center-section">
          <div className="dotted-lines">
            <svg className="lines" width="100%" height="100%">
              <path className="line-path" d="M0,50 H400" />
            </svg>
          </div>
          <div className="center-icon">
            <div className="icon-inner">
              <FaTimes />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="right-column">
          <div className="stats-card">
            <div className="stats-header">
              <div className="title">Business Growth</div>
              <div className="rate">
                <span>150%</span>
                <FaArrowRight />
                <div className="rate-label">Increase Rate</div>
              </div>
            </div>
            <div className="chart">
              <div className="y-axis">
                <span>500</span>
                <span>250</span>
                <span>100</span>
                <span>0</span>
              </div>
              <div className="chart-bars">
                {[
                  { date: "2 June", values: [80, 60] },
                  { date: "9 June", values: [90, 40] },
                  { date: "16 June", values: [70, 85] },
                  { date: "23 June", values: [50, 95] },
                ].map((bar, index) => (
                  <div key={index} className="bar-group">
                    <div className="bars">
                      <div className="bar primary" style={{ height: `${bar.values[0]}%` }}></div>
                      <div className="bar secondary" style={{ height: `${bar.values[1]}%` }}></div>
                    </div>
                    <div className="date">{bar.date}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

