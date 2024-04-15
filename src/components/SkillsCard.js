import React from 'react'
import './SkillsCard.css';
import {AiFillHtml5} from 'react-icons/ai';
import {BiLogoCss3} from 'react-icons/bi';
import {BiLogoJavascript} from 'react-icons/bi';
import {FaReact} from 'react-icons/fa';
import {BiLogoRedux} from 'react-icons/bi';
import {AiFillGithub} from 'react-icons/ai';
import {FaNodeJs} from 'react-icons/fa';
import {BsFillTerminalFill} from 'react-icons/bs';
import {BiLogoPostgresql} from 'react-icons/bi';
import {AiFillChrome} from 'react-icons/ai';
import {SiMocha} from 'react-icons/si';
import { FaWordpress } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";



function SkillsCard() {
  return (
    <div className="skillsCard">
      <div className = "skillItem">
      <AiFillHtml5 className = "reactIcon"/>
      <h3>HTML</h3>
      </div>
      <div className = "skillItem">
      <BiLogoCss3 className = "reactIcon" />
      <h3>CSS</h3>

      </div>
      <div className = "skillItem">
      <BiLogoJavascript className = "reactIcon" />
      <h3>Javascript</h3>
        
      </div>
      <div className = "skillItem">
      <FaReact className = "reactIcon" />
      <h3>React.js</h3>
        
      </div>
      <div className = "skillItem">
      <BiLogoRedux className = 'reactIcon' />
      <h3>Redux.js</h3>
      </div>
      <div className = "skillItem">
        <AiFillGithub className = 'reactIcon' />
        <h3>Github</h3>
      </div>
      <div className = "skillItem">
        <FaNodeJs className = 'reactIcon' />
        <h3>Node.js</h3>
      </div>
      <div className = "skillItem">
        <BsFillTerminalFill className = 'reactIcon'/>
        <h3>Terminal</h3>
      </div>
      <div className = "skillItem">
        <BiLogoPostgresql className = 'reactIcon' />
        <h3>PostgreSQL</h3>
        
      </div>
      <div className = "skillItem">
        <AiFillChrome className = 'reactIcon' />
        <h3>Chrome Debugger</h3>
      </div>
      <div className = "skillItem">
        <SiMocha className = 'reactIcon' />
        <h3>Mocha.js for testing</h3>
      </div>
      <div className = "skillItem">
        <FaWordpress className = 'reactIcon' />
        <h3>Wordpress</h3>
      </div>
      <div className = "skillItem">
        <DiJqueryLogo className = 'reactIcon' />
        <h3>JQuery</h3>
      </div>
      <div className = "skillItem">
        <FaPython className = 'reactIcon' />
        <h3>Python</h3>
      </div>
      <div className = "skillItem">
        <FaPhp className = 'reactIcon' />
        <h3>Php</h3>
      </div>
      <div className = "skillItem">
        <SiMysql className = 'reactIcon' />
        <h3>MySQL</h3>
      </div>

    </div>
    
  )
}

export default SkillsCard