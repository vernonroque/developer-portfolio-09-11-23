import React from 'react'
import './ExperienceCard.css';

function ExperienceCard({year,occupation,company,description}) {
  return (
    <div className="experienceCard">
        <h4 className="year-tab">{year}</h4>
        <h2 className="degree-title">{occupation}</h2>
        <h3 className="univeristy">{company}</h3>
        <p className="description">{description}</p>
    </div>
        
  )
}

export default ExperienceCard