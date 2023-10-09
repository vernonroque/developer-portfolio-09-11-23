import React, {useState,useEffect} from 'react'
import './Portfolio.css'
import movieDatabase from '../photos/movieDatabase.png';
import movieDatabaseSmallz from '../photos/movieDatabaseSmallz.png';
import ProjectItem from './ProjectItem';
import amazonClone from '../photos/amazon-clone.png'
import redditThumbnail from '../photos/reddit-thumbnail.png';
import redditSmallz from '../photos/redditSmallz.png';
import jammmingApp from '../photos/jammmingApp.png'
import jammingSmallz from '../photos/jammingSmallz.png';



function Portfolio({PortfolioRef}) {

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  
  
  useEffect(() => {
    // Define a function to check the screen size and update the state
    const checkScreenSize = () => {
        const smallScreen = window.innerWidth <= 500;
        setIsSmallScreen(smallScreen)  // Adjust the breakpoint as needed
        if(smallScreen)
          console.log("The screen is small");
        else
          console.log("The screen is big");
   };
    // setIsSmallScreen(window.addEventListener('resize', checkScreenSize));
    window.addEventListener('resize', checkScreenSize);
    

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, [isSmallScreen]);
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
            className="project"
            img = {isSmallScreen ? movieDatabaseSmallz:movieDatabase}
            url = "https://curious-salamander-31c89a.netlify.app/"
            description = "An application that shows trending movies and popular movies currently. There is also a search feature"
            technologies = "React.js"
            title = "Movie Database"
          />
            <ProjectItem
            className="project"
            img = { amazonClone}
            url = "https://clone-bfd8a.web.app/" 
            description = "A mini copy of the e-commerce site Amazon. Fullstack application."
            technologies = "React.js, Google Firebase, Stripe, Express.js, Axios.js"
            title = "Amazon Clone"
          />
           <ProjectItem
            className="project"
            img = {isSmallScreen ? redditSmallz : redditThumbnail}
            url = "https://glittering-fairy-46bf3d.netlify.app/"
            description = "A mini copy of the community forum site Reddit."
            technologies = "React.js, Redux.js"
            title = "Reddit Clone"
          />
           <ProjectItem
            className="project"
            img = {isSmallScreen ? jammingSmallz:jammmingApp}
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