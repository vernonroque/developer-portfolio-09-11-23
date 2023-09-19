import React from 'react'
import './Portfolio.css'
import oceanImage from '../photos/ocean-home.jpg';
import movieDatabase from '..//photos/movieDatabase.png';

function Portfolio({PortfolioRef}) {
  return (
    <div ref = {PortfolioRef}>
      <section className = 'portfolio-container'>
      <h1>Portfolio section</h1>
        <section className ="projects-box">
              <section className ="portfolio-bundle">
                <div className = "portfolio-card">
                    <img className="actual-image" src = {movieDatabase} alt="ocean-pic"/>
                    <div className="img-overlay img-overlay-blur">
                      <a href = "https://6508ff2f1e691350ed2dda7a--curious-salamander-31c89a.netlify.app/" 
                        target="_blank"
                        rel="noreferrer"
                        >
                      <button className = "project-button">
                          <h1>Click for more info</h1>
                        </button>
                      </a>
                    </div>
                </div>
                <div className = "description-container">
                <h2>Description: </h2>
                      <p> This application fetches data from the movie database and displays movies that are 
                        trending today. It also displays the top 20 popular movies currently. There is also a search function 
                        to look for movies
                      </p>
                </div>
              </section>
              <section className ="portfolio-bundle">
                <section className = "portfolio-card">
                    <img className="actual-image" src = {movieDatabase} alt="ocean-pic"/>
                    <div className="img-overlay img-overlay-blur">
                      <a href = "https://6508ff2f1e691350ed2dda7a--curious-salamander-31c89a.netlify.app/" 
                        target="_blank"
                        rel="noreferrer"
                        >
                      <button className = "project-button">
                          <h1>Click for more info</h1>
                        </button>
                      </a>
                    </div>
                </section>
                <div className="description-container">
                  <h2>Description: </h2>
                      <p> This application fetches data from the movie database and displays movies that are 
                        trending today. It also displays the top 20 popular movies currently. There is also a search function 
                        to look for movies
                      </p>
                </div>
              
              </section>

          </section>

      </section>
    
    </div>
  )
}

export default Portfolio