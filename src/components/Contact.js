import React, {useRef} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

//export const ContactUs = ({ContactRef}) => {

function Contact({ContactRef}) {

  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  console.log("serviceId>>>", serviceId);
  console.log("public key >>>>",publicKey);
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          setTimeout(()=>{
            alert('Successfully Submitted!');
          },1000)
         
      }, (error) => {
          console.log(error.text);
      });
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

        <form className ='contactForm' ref={form} onSubmit={sendEmail}>
          <div className ="info">
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
          </div>
          <label>Message</label>
          <textarea className ="textArea" name="message" />
          <input type="submit" value="Send" />
        </form>

      </section>
    
    </div>
  )
}

export default Contact;