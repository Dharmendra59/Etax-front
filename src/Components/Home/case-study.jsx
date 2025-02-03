import { FaArrowRight } from 'react-icons/fa'
import { useState } from 'react'

import './case-study.css'

const categories = [
  { id: 'all', name: 'All' },
  { id: 'corporate', name: 'Corporate' },
  { id: 'personal', name: 'Personal' },
  { id: 'advisory', name: 'Advisory' },
  { id: 'consult', name: 'Consult' },
  { id: 'insurance', name: 'Insurance' }
]

const caseStudies = [
  {
    id: 1,
    image: "https://live.themewild.com/taxrio/assets/img/case/01.jpg",
    category: "Tax Advice",
    title: "Corporate Tax Planning",
    type: "corporate"
  },
  {
    id: 2,
    image: "https://live.themewild.com/taxrio/assets/img/case/02.jpg",
    category: "Tax Planning",
    title: "Corporate Tax Planning",
    type: "corporate"
  },
  {
    id: 3,
    image: "https://live.themewild.com/taxrio/assets/img/case/03.jpg",
    category: "Personal Tax",
    title: "Corporate Tax Planning",
    type: "personal"
  },
  {
    id: 4,
    image: "https://live.themewild.com/taxrio/assets/img/case/04.jpg",
    category: "Insurance Tax",
    title: "Corporate Tax Planning",
    type: "insurance"
  },
  {
    id: 5,
    image: "https://live.themewild.com/taxrio/assets/img/case/05.jpg",
    category: "Corporate Tax",
    title: "Corporate Tax Planning",
    type: "corporate"
  },
  {
    id: 6,
    image: "https://live.themewild.com/taxrio/assets/img/case/06.jpg",
    category: "Tax Audit",
    title: "Corporate Tax Planning",
    type: "advisory"
  }
]

export default function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredCaseStudies = activeCategory === 'all'
    ? caseStudies
    : caseStudies.filter(study => study.type === activeCategory)

  return (
    <section className="case-studies">
      <div className="case-studies-container">
        <div className="case-studies-header">
          <span className="section-label">Case Study</span>
          <h2 className="section-title">
            Let's Check Recent<br />
            Completed Case Study
          </h2>
        </div>

        <div className="categories">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="case-studies-grid">
          {filteredCaseStudies.map(study => (
            <div key={study.id} className="case-study-card">
              <div className="card-image">
                
                <img src={study.image || "/placeholder.svg"} alt={study.title} width={400} height={300} className="study-image" />
                <div className="image-overlay">
                  <FaArrowRight className="arrow-icon" />
                </div>
              </div>
              <div className="card-content">
                <span className="category-label">{study.category}</span>
                <h3>{study.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
