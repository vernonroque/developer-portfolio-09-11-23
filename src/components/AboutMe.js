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
              <h2> I'm <span className ="name">Vernon Roque,</span> an Aspiring Web Developer</h2><br/>
              <p>

I am a Math Teacher looking for a career change. I have been learning the skills I need to become a front-end web developer. <br/><br/>

I am currently enrolled in the Codecademy Full-Stack Career Path which encompasses technologies used in both front-end and back-end development. 

Skills and technologies that I have learned through the curriculum are the following: html/css, javascript, react.js, redux.js, bash/terminal for mac, node.js, express.js, and postrgreSQL. <br/><br/>

I graduated with a bachelor's degree in Electrical Engineering at the University of Southern California (USC). After 4 years working as a Systems Installation Engineer for Panasonic Avionics Corporation, I decided to take a break and travel through South America. 

I eventually settled in Colombia and decided to become a jazz musician. I play jazz saxophone. If you're curious, check out my youtube channel

by clicking this link here:

<a href="https://www.youtube.com/channel/UCoyWsTSvknATg4j8pLETZ4w" target="_blank" rel="noreferrer"> Click this link!</a><br/><br/>

During the pandemic, I rekindled my joy for engineering, specifically in the realm of computer science. I find software development to be engaging and challenging. 

And most importantly, I find that software development allows room for a lot of creativity and innovation. This is the reason I am pursuing a career in front-end development.<br/><br/>

I realize that my work experience may seem like an odyssey, but in the words of JRR Tolkien, <br/><br/> <span className="quote">“Not all those who wander are lost."</span><br/>

My eclectic experiences have shaped me into a more responsible, disciplined, and focused individual. 

Please take a look at my portfolio and let me know what you think. I made this portfolio using React.js.<br/><br/>
I look forward to hearing from you!<br/><br/>

Regards,<br/><br/>

Vernon Roque

</p>
            </div>
            <ul className = "quick-facts">
              <li className= "list-item"><span className="type">Name:</span> Vernon Roque</li>
              <li className= "list-item"><span className="type">Email:</span > <span className ="email">vroque88@gmail.com</span></li>
              <li className= "list-item"><span className="type">From:</span> Los Angeles, California</li>
              <li className= "list-item"><span className="type">Intent:</span> Front-End Web Developer</li>
              <button className ="aboutMe-button" onClick={handleClick}>Download CV <FaDownload/></button>
            </ul>
           
            
          </section>
           
        </section>
    
    </div>
  )
}

export default AboutMe