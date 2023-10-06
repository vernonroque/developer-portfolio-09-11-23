import React from 'react'
import './Portfolio.css'
import movieDatabase from '../photos/movieDatabase.png';
import ProjectItem from './ProjectItem';
import amazonClone from '../photos/amazon-clone.png'
import redditThumbnail from '../photos/reddit-thumbnail.png';
import jammmingApp from '../photos/jammmingApp.png'

function Portfolio({PortfolioRef}) {
  return (
    <div ref = {PortfolioRef}>
      <section className = 'portfolio-container'>
        <div className = "portfolio-title">
          <h1>Portfolio</h1>
          <div className = "portfolio-inner-title">
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
            <ProjectItem
            img = {amazonClone}
            url = "https://clone-bfd8a.web.app/" 
            description = "A mini copy of the e-commerce site Amazon. Fullstack application."
            technologies = "React.js, Google Firebase, Stripe, Express.js, Axios.js"
            title = "Amazon Clone"
          />
           <ProjectItem
            img = {redditThumbnail}
            url = "https://glittering-fairy-46bf3d.netlify.app/"
            description = "A mini copy of the community forum site Reddit."
            technologies = "React.js, Redux.js"
            title = "Reddit Clone"
          />
           <ProjectItem
            img = {jammmingApp}
            url = "https://sweet-malasada-1bb69a.netlify.app/"
            description = "An application that lets you create a playlist on your Spotify Account."
            technologies = "React.js"
            title = "Jammming App"
          />
             
          </section>

      </section>
    
    </div>
  )
}

export default Portfolio