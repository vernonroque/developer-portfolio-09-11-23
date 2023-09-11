import React from 'react'
import './NavLinks.css'

function NavLinks({scrollToHome,scrollToAboutMe,scrollToResume,scrollToPortfolio,scrollToContact}) {

  return (
    <>
    <section className='navLink-container'>
        <h1 onClick = {scrollToHome}  className='navLink'>Home</h1>
        <h1 onClick={scrollToAboutMe} className='navLink'>About me</h1>
        <h1 onClick = {scrollToResume} className='navLink'>Resume</h1>
        <h1 onClick ={scrollToPortfolio} className='navLink'>Portfolio</h1>
        <h1 onClick = {scrollToContact} className='navLink'>Contact</h1>
    </section>
    </>
  )
}

export default NavLinks