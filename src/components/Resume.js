import React from 'react';
import './Resume.css';
import EducationCard from './EducationCard.js';
import ExperienceCard from './ExperienceCard';
import SkillsCard from './SkillsCard';
import { FaDownload } from 'react-icons/fa';

function Resume({ResumeRef,downloadResume}) {


  const handleClick =()=>{
    return downloadResume();
  }




  return (
    <div ref = {ResumeRef}>
        <section className = "resume-container">
        <div className = "resume-title">
            <h1>Summary</h1>
            <div className = "resume-inner-title">
               <h2>Resume</h2>
            </div>
          </div>
          <section className="resume-body">
          <h1>The education container</h1>
            <div className="education">
                <EducationCard
                  className = "educationBundle"
                  year = "2021-present"
                  degree = "Fullstack Engineering Course"
                  university = "Codecademy Career Path"
                  description = "Studying front-end technologies such as html, css, and javascript as well as frameworks react/redux. Studying back-end technologies such as node.js, express.js, sql, and posgresql."
                
                />
                <EducationCard 
                  className = "educationBundle"
                    year = "2008-2011" 
                    degree = "Bachelors Degree in Electrical Engineering"
                    university = "University of Southern California"
                    description = " Emphasis on circuit design and analysis. Used technologies such as Matlab, Verilog/VHDL, SPICE, and C++."
                />
              
            </div>
            <h1>The experience container</h1>
            <div className = "experience">
              <ExperienceCard
              year = "2022-present"
              occupation = "Math Teacher"
              company = "Lexington Singapore School"
              description = "I am currently a math teacher teaching 2nd grade, 3rd grade, and 4th grade math"
               />
              <ExperienceCard 
               year = "2022-present"
               occupation = "Math Teacher"
               company = "Lexington Singapore School"
               description = "I am currently a math teacher teaching 2nd grade, 3rd grade, and 4th grade math"/>
            </div>

          </section>
          <section className="skills">
            <h1>My Skills</h1>
            <SkillsCard />
          </section>
          <button className="resume-button" onClick={handleClick}>Download CV <FaDownload/></button>


        </section>
    </div>
  )
}

export default Resume