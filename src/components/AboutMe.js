import React from 'react'
import './AboutMe.css'

function AboutMe({AboutMeRef}) {

  return (
    < div ref={AboutMeRef}>
        <section className = "aboutMe-container">
            <h1>About Me Section</h1>
        </section>
    
    </div>
  )
}

export default AboutMe