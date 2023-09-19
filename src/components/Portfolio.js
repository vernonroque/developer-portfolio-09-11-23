import React from 'react'
import './Portfolio.css'
import oceanImage from '../photos/ocean-home.jpg';
import movieDatabase from '..//photos/movieDatabase.png';
import ProjectItem from './ProjectItem';

function Portfolio({PortfolioRef}) {
  return (
    <div ref = {PortfolioRef}>
      <section className = 'portfolio-container'>
        <div className = "aboutMe-title">
          <h1>Portfolio</h1>
          <div className = "aboutMe-inner-title">
            <h2>My Work</h2>
          </div>
        </div>
        <section className ="projects-box">
          <ProjectItem
            img = {movieDatabase}
            url = "https://6508ff2f1e691350ed2dda7a--curious-salamander-31c89a.netlify.app/"
            description = "An application that shows trending movies and popular movies currently. There is also a search feature"
            technologies = "React.js"
            title = "Movie Database"
          />
             
          </section>

      </section>
    
    </div>
  )
}

export default Portfolio