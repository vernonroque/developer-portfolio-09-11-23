import React from 'react'
import './ProjectItem.css';

function ProjectItem(props) {

    const {img,url,description,technologies,title} = props;

  return (
    <div className = "project-bundle">
                <div className = "project-card">
                    <img className="actual-image" src = {img} alt="movie database"/>
                    <div className="img-overlay img-overlay-blur">
                        <div className="description-container">
                        <h1 className = "project-title">{title}</h1>
                            <h3 className = "project-description">{description}</h3>
                            <h3 className = "project-technologies">Technologies: {technologies}</h3>
                        </div>
                      <a href = {url}
                        target="_blank"
                        rel="noreferrer"
                        >
                      <button className = "project-button">
                          <h1>Click to see demo</h1>
                        </button>
                      </a>
                    </div>
                </div>
    </div>
  )
}

export default ProjectItem