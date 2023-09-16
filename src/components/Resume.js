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
            <div className="education">
              <h1>The education container</h1>
                <EducationCard />
              
            </div>
            <div className = "experience">
              <h1>The experience container</h1>
              <ExperienceCard />
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