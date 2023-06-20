import React from "react";
import CakeLeft from "../assets/cakeLogo.jpg";
import "../styles/Contact.css";

import emailjs from '@emailjs/browser';

import {useRef, useState} from "react";


const Contact = () => {
  const form = useRef();
  const[done,setDone]=useState(false)
  
  const sendEmail=(e) =>{
      e.preventDefault();
      emailjs.sendForm('service_ue0u59e', 'template_zrwiudc', form.current, '2KztcqQEUl1eLvMMh' ).then((result) => {
      
      alert('Thanks For Contacting. We will deliver it soon!!');
      setDone(true);
      
     },(error) => {
      console.log(error.text);
     });
  };
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${CakeLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form ref={form} id="contact-form" onSubmit={sendEmail}  >
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter Name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
          <span> {done} </span>
        </form>
      </div>
      
    </div>
  );
}

export default Contact;