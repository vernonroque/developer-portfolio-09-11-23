import React, {useState,useEffect} from 'react'
import './Header.css';
import NavLinks from './NavLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import {ImCross} from 'react-icons/im';


function Header({scrollToAboutMe,scrollToResume,scrollToPortfolio,scrollToContact,WrapperRef}) {

  const [header,setHeader] = useState(false);
  const [isMobileMenuOpen,setIsMobileMenuOpen] = useState(false);
  //const scrollContainerRef = useRef();

  const scrollToTopOfContainer = () => {
    if (WrapperRef.current) {
      WrapperRef.current.scrollTop = 0;
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

 
  function handleMobileHome(){
    scrollToTopOfContainer();
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

  

  //window.addEventListener('scroll',changeBackground);
  
   useEffect(()=>{
    const wrapperDiv = document.querySelector(".wrapper");

     function changeBackground(){

    // if(window.scrollY >=3){
    //    console.log(window.scrollY);
    //   setHeader(true);
    // }
    // else
    //   setHeader(false);

    if(WrapperRef.current){
      if(WrapperRef.current.scrollTop>=60){
       setHeader(true);
     }
     else
       setHeader(false);


    }
    //console.log("The Wrapper Ref>>>", WrapperRef.current.scrollTop);

   }

  wrapperDiv.addEventListener("scroll", changeBackground);

  //console.log('Still loading');


   },[WrapperRef])

  return (
    <>
    <section className = {header ? 'header-container active': 'header-container'}>
    <FontAwesomeIcon icon= {faMugHot} className=' logo-img fa-2x coffee-mug' style ={{color:'white'}}/> 
        <NavLinks 
        scrollToHome = {scrollToTopOfContainer}
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