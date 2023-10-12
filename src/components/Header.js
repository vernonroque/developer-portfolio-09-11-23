import React, {useState} from 'react'
import './Header.css';
import NavLinks from './NavLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import {ImCross} from 'react-icons/im';


function Header({scrollToHome,scrollToAboutMe,scrollToResume,scrollToPortfolio,scrollToContact}) {

  const [header,setHeader] = useState(false);
  const [isMobileMenuOpen,setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  function changeBackground(){
    if(window.scrollY >= 60){
      // console.log(window.scrollY);
      setHeader(true);
    }
    else
      setHeader(false);
  }

  function handleMobileHome(){
    scrollToHome();
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  function handleMobileAboutMe(){
    scrollToAboutMe();
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  function handleMobileResume(){
    scrollToResume();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  function handleMobilePortfolio(){
    scrollToPortfolio();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  function handleMobileContact(){
    scrollToContact();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  window.addEventListener('scroll',changeBackground);





  return (
    <>
    <section className = {header ? 'header-container active': 'header-container'}>
    <FontAwesomeIcon icon= {faMugHot} className=' logo-img fa-2x coffee-mug' style ={{color:'white'}}/> 
        <NavLinks 
        scrollToHome = {scrollToHome}
        scrollToAboutMe={scrollToAboutMe}
        scrollToResume = {scrollToResume}
        scrollToPortfolio = {scrollToPortfolio}
        scrollToContact = {scrollToContact}
        />
        
      <section className ='mobile-section'>
          {/* Hamburger icon */}
            <div className={`hamburger${isMobileMenuOpen ? ' open' : ''}`} onClick={toggleMobileMenu}>
              
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
             
              {/* {isMobileMenuOpen && (<ImCross className ='cross'/>)} */}
            </div>

            {isMobileMenuOpen && ( 
              <div className="mobile-menu">
                {/* Add your mobile menu items here */}
                <ul>
                  <li onClick={handleMobileHome}>Home</li>
                  <li onClick={handleMobileAboutMe}>About Me</li>
                  <li onClick={handleMobileResume}>Resume</li>
                  <li onClick={handleMobilePortfolio}>Portfolio</li>
                  <li onClick={handleMobileContact}>Contact</li>
                </ul>
              </div>
               )}
        </section>
    

      {/* <a href ='https://www.linkedin.com/in/vernon-roque-84724235/' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className=' logo-img fa-3x linkedIn-logo' style={{color:'dodgerblue'}} /></a> */}

     
    
    </section>
    </>
    
  )
}

export default Header