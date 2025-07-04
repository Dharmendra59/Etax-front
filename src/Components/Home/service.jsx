import { 
  FaCalculator, 
  FaUserTie, 
  FaShieldAlt,
  FaBuilding,
  FaSearchDollar,
  FaChartLine
} from 'react-icons/fa'

import './service.css'

const services = [
  {
    icon: <FaCalculator />,
    title: "Financial Planning",
    description: "We offer tailored financial planning solutions to help you achieve your goals with confidence.",
    image: "https://live.themewild.com/taxrio/assets/img/service/01.jpg"
  },
  {
    icon: <FaUserTie />,
    title: "Audit & Tax Planning",
    description: "Expert audit and tax strategies designed to protect your business and maximize your savings.",
    image: "https://live.themewild.com/taxrio/assets/img/service/02.jpg"
  },
  {
    icon: <FaShieldAlt />,
    title: "Audit Report",
    description: "Accurate and detailed audit reports to give you complete clarity and confidence in your finances.",
    image: "https://live.themewild.com/taxrio/assets/img/service/03.jpg"
  },
  {
    icon: <FaBuilding />,
    title: "Finance Secure",
    description: "Secure and reliable financial solutions designed to protect what matters most to you.",
    image: "https://live.themewild.com/taxrio/assets/img/service/04.jpg"
  },
  {
    icon: <FaSearchDollar />,
    title: "Tax Audit Support",
    description: "Comprehensive tax audit assistance to ensure compliance and protect your interests.",
    image: "https://live.themewild.com/taxrio/assets/img/service/05.jpg"
  },
  {
    icon: <FaChartLine />,
    title: "Insurance and Tax",
    description: "Expert guidance to help you balance insurance needs and tax planning with confidence.",
    image: "https://live.themewild.com/taxrio/assets/img/service/06.jpg"
  }
]

export default function Services() {
  return (
    <section className="services">
      <div className="services-container">
        <div className="services-header">
          <span className="section-label">Our Services</span>
          <h2 className="section-title">
            What We Provide <br />
            {/* <span className="highlight">Customers</span> */}
          </h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-cards">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-image">
                {/* <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={300}
                  height={200}
                  className="rounded-image"
                /> */}
                <img src={service.image || "/placeholder.svg"} alt={service.title} width={300} height={200} className="rounded-image" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
