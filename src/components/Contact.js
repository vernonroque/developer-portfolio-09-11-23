import React, {useRef} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';



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
              <h1>Follow Me</h1>
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
              <textarea className ="textArea" name="message" placeholder = "Contact Us!" required />
              <input className ="submitButton" type="submit" value="Send" />
           </form>

        </section>
        

       
      </section>
    
    </div>
  )
}

export default Contact;