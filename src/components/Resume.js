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
            <h1>Education</h1>
                <EducationCard
                  year = "2021-2024"
                  degree = "Fullstack Engineering Course"
                  university = "Codecademy Career Path"
                  description = "Studying front-end technologies such as html, css, and javascript as well as frameworks react/redux. Studying back-end technologies such as node.js, express.js, and posgresql. Have built several different projects regarding these technologies."
                />
                <EducationCard 
                    year = "2008-2011" 
                    degree = "Bachelors Degree in Electrical Engineering"
                    university = "University of Southern California"
                    description = "Emphasis on VLSI and analog circuit design and analysis. Used technologies such as Matlab, Verilog/VHDL, SPICE, and C++."
                />
            </div>
           
            <div className = "experience">
            <h1>Notable Work Experience</h1>
            <ExperienceCard
              year = "2024-present"
              occupation = "Fullstack Software Developer"
              company = "Cadenza Property Management"
              description = {`I manage and maintain the admin website. I manage the backend server and database. I build scripts to automate payroll and budget reports.
                Technologies that I use are javascript/jquery, node.js, express.js, mysql, python, github, github action,
                docker containers, aws ec2, aws rds, aws ecs, aws event bridge, and aws lambda.`}
               />
            <ExperienceCard
              year = "2024-Mar 2025"
              occupation = "Software Developer Intern"
              company = "Gala"
              description = {`Worked on an application that takes a customers question or response, and uses AI to return a valid answer. 
                Technologies that I am using are React.js, Django, PHP, Flutter, Tailwind CSS.`}
               />
            <ExperienceCard
              year = "2023-2025"
              occupation = "Freelance Web Developer"
              company = "Purgace"
              description = "Responsible for site design and functionality using wordpress, css, and javascript. I am also responsible for API design using 3rd party platforms"
               />
               <ExperienceCard
              year = "2022-2025"
              occupation = "Math Teacher"
              company = "Lexington Singapore School"
              description = "I currently teach 1st, 2nd, 3rd, and 4th grade math"
               />
              <ExperienceCard 
               year = "2018-2022"
               occupation = "Enlgish as a Second Language (ESL) Teacher"
               company = "VIPKid"
               description = "I teach students remotely. Lessons cover different exercises ranging from reading, vocabulary, grammar, pronunciation, and listening."
               />
              <ExperienceCard 
               year = "2017 - Present"
               occupation = "Jazz Musician"
               company = "Self-Employed"
               description = "Played jazz saxophone while traveling through South America. I play the tenor saxophone. I also enjoy playing the blues, bossa nova, and cumbia."
               />
               <ExperienceCard 
               year = "2012-2015"
               occupation = "Systems Installation Engineer"
               company = "Panasonic Avionics Corporation"
               description = "Designed and developed Global Communication Systems and In-Flight Entertainment Systems interconnects to ensure proper interfacing with existing aircraft equipment for international airlines such as Etihad Airways and China Southern Airlines.Prepared engineering schematics with AutoCAD."
               />
                <ExperienceCard 
               year = "Jun 2011 - Nov 2011"
               occupation = "Product Realization Intern at T-Mobile USA"
               company = "T-Mobile Inc"
               description = "Tested Wi-Fi calling and collaborated with the engineering team to resolve any issues. Developed a basic understanding of wireless GSM/GPRS, handset client, content, and mobile web."
               />
              
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