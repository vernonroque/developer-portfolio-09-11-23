import React, {useState} from 'react'
import './Header.css';
import NavLinks from './NavLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Header({scrollToHome,scrollToAboutMe,scrollToResume,scrollToPortfolio,scrollToContact}) {

  const [header,setHeader] = useState(false);

  function changeBackground(){
    if(window.scrollY >= 60){
      console.log(window.scrollY);
      setHeader(true);
    }
    else
      setHeader(false);
  }

  window.addEventListener('scroll',changeBackground);




  return (
    <>
    <section className = {header ? 'header-container active': 'header-container'}>
    <FontAwesomeIcon icon= {faMugHot} className=' logo-img fa-3x coffee-mug' style ={{color:'white'}}/> 
        <NavLinks 
        scrollToHome = {scrollToHome}
        scrollToAboutMe={scrollToAboutMe}
        scrollToResume = {scrollToResume}
        scrollToPortfolio = {scrollToPortfolio}
        scrollToContact = {scrollToContact}
        />
        <a href ='https://www.linkedin.com/in/vernon-roque-84724235/' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className=' logo-img fa-3x linkedIn-logo' style={{color:'dodgerblue'}} /></a>
    </section>
    </>
    
  )
}

export default Header