import React, {useRef} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import profilePic from '../photos/profile-pic.jpg';
import {IoLogoWhatsapp} from 'react-icons/io';
import {GrMail} from 'react-icons/gr';
import{AiFillLinkedin} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';



function Contact({ContactRef}) {

  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const form = useRef();

  function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }



  const sendEmail = (e) => {
    e.preventDefault();

    const emailInput = document.getElementById("email");
    const email = emailInput.value.trim();

    if(isValidEmail(email)){

      console.log('Sending email....');

      emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          setTimeout(()=>{
            alert('Successfully Submitted!');
          },100)
         
      }, (error) => {
          console.log(error.text);
      });
    }else{
      alert("Please enter a valid email address.");
      emailInput.focus(); // Set focus back to the email field
    }

   
  };

  return (
    <div ref = {ContactRef}>
      <section className = "contact-container">
        <div className = "contact-title">
            <h1>Contact</h1>
            <div className = "contact-inner-title">
               <h2>Get In Touch</h2>
            </div>
          </div>
        <section className = "contact-body">
            <section className ="Contact-details">
              <h1>Contact Me</h1>
                <div className ='selfie-container'>
                   <img className = 'profile-pic' src ={profilePic} alt ='selfie'/>
                </div>
                <div className ="contactInfo-container">
                    <div className ='mail'>
                        <GrMail className = 'mailIcon'/>
                        <h3>vroque88@gmail.com</h3>
                    </div>
                    <div className="whatsApp">
                      <IoLogoWhatsapp className ="whatsAppLogo"/>
                      <h3>+1-818-531-8729</h3>
                    </div>
                    <div className ="social-media-section">
                      <h1>Follow Me On:</h1>
                      <div className ="social-media-container">
                         <a href = "https://www.linkedin.com/in/vernon-roque-84724235/" target="_blank" rel="noreferrer">
                             <AiFillLinkedin className = "icon"/>
                        </a>
                        <a href ="https://github.com/vernonroque" target="_blank" rel="noreferrer">
                            <AiFillGithub className ="icon"/>
                        </a>
                         
                      </div>
                     
                    </div>
                </div>
               
              
            </section>
            
            <form className ='contactForm' ref={form} onSubmit={sendEmail}>
            <h1>Send Me A Note</h1>
            <div className ="info">
              {/* <label>Name</label> */}
              <input className = "nameInput" type="text" name="user_name" placeholder ="Your Name" required />
              {/* <label>Email</label> */}
              <input className = "emailInput" id ="email" type="email" name="user_email" placeholder ="Your Email" required />
           </div>
          {/* <label>Message</label> */}
              <textarea className ="textArea" name="message" placeholder = "Write Me A Message!" required />
              <div className = "submit-container">
                <input className ="submitButton" type="submit" value="Send Message" />  
              </div>
              
           </form>

        </section>
        

       
      </section>
    
    </div>
  )
}

export default Contact;