import React from 'react'
import './EducationCard.css';

function EducationCard({year,degree,university,description}) {
  return (
    <div className="educationCard">
        <h4 className="year-tab">{year}</h4>
        <h2 className="degree-title">{degree}</h2>
        <h3 className="university">{university}</h3>
        <p className="description">
          {description}
        </p>
    </div>
  )
}

export default EducationCard;