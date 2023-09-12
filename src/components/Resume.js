import React from 'react';
import './Resume.css';

function Resume({ResumeRef}) {
  return (
    <div ref = {ResumeRef}>
        <section className = "resume-container">
        <div className = "resume-title">
            <h1>Summary</h1>
            <div className = "resume-inner-title">
               <h2>Resume</h2>
            </div>
          </div>


        </section>
    
    
    </div>
  )
}

export default Resume