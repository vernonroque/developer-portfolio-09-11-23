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
              <h2> I'm <span className ="name">Vernon Roque,</span> A Web Developer</h2><br/>
              <p>

              <h3>USC Engineer + Creative Architect = Front-End Creative Innovation </h3>
              <br/>
              
 I'm Vernon Roque, a front-end developer with a passion for creating websites that aren't just functional—they're captivating experiences. 
 I blend my engineering background, creative artistry, and global perspective to craft digital spaces that resonate with your audience.
 <br/><br/>
  
 <h3>My Path to Pixel Perfection</h3>
 <br/>
 My journey to web development began with a foundation in electrical engineering from USC, and experience as a systems installation engineer and mathematics teacher. 
 These roles taught me the precision and problem-solving skills that now power my code. 
 <br/><br/>
  
 But my true passion lies in the fusion of art and technology. 
 As a successful jazz musician, I learned the art of improvisation, rhythm, and storytelling—skills that now translate into designing intuitive user interfaces and seamless digital journeys.
 Listen to some great vibes if you're interested: <a href="https://www.youtube.com/channel/UCoyWsTSvknATg4j8pLETZ4w" target="_blank" rel="noreferrer"> <span>Click here to view my channel!</span></a><br/><br/>

  
 <h3>My Technical Toolkit</h3><br/>
 Through my full-stack training at Codecademy and active coding journey, I've become fluent in a comprehensive range of front-end and back-end technologies:
 <ul>
    <li>HTML/CSS (foundational building blocks) </li>
    <li>JavaScript and JQuery (interactive functionalities)</li>
    <li>React.js and Redux.js (powerful user interface frameworks)</li>
    <li>Node.js and Express.js (flexible server-side tools)</li>
    <li>MySQL and PostgreSQL (relational databases)</li>
    <li> Multiple web software environments (adaptability and expertise)</li>
    <li>Wordpress (quick and simple website template)</li>
    <li>Python (data science, machine learning, and AI)</li>
 </ul>
 <br/>
 
 <h3>My Global Perspective</h3>
 <br/>
 My extensive travels have shaped a deep understanding of diverse cultures and perspectives, which I bring to every project. 
 I'm committed to building websites that are inclusive and accessible to all.
 <br/><br/>
  
 <h3>Ready to Harmonize?</h3>
 <br/> 
 Let's create a website that speaks to your audience and elevates your brand. 
 Explore my portfolio to see my work in action, and then let's chat about your vision.
 I look forward to hearing from you!
 <br/><br/>

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