import React from 'react'
import './AboutMe.css'
import {FaDownload} from 'react-icons/fa';

function AboutMe({AboutMeRef,downloadResume}) {

  function handleClick(){
    return downloadResume();
  }

  return (
    < div ref={AboutMeRef}>
        <section className = "aboutMe-container">
          <div className = "aboutMe-title">
            <h1>About Me</h1>
            <div className = "aboutMe-inner-title">
               <h2>Know Me More</h2>
            </div>
          </div>
          <section className="aboutMe-body">
            <div className ="paragraph">
              <h2> I'm <span className ="name">Vernon Roque,</span> a Web Developer</h2>
              <p>Here's more stuff about me</p>
            </div>
            <ul className = "quick-facts">
              <li className= "list-item"><span className="type">Name:</span> Vernon Roque</li>
              <li className= "list-item"><span className="type">Email:</span > <span className ="email">vroque88@gmail.com</span></li>
              <li className= "list-item"><span className="type">From:</span> Los Angeles, California</li>
              <li className= "list-item"><span className="type">Intent:</span> Aspiring Web Developer</li>
              <button className ="aboutMe-button" onClick={handleClick}>Download CV <FaDownload/></button>
            </ul>
           
            
          </section>
           
        </section>
    
    </div>
  )
}

export default AboutMe