import React, { useRef, useState } from 'react';
import './contact.css';
import emailjs from 'emailjs-com';
import { photo } from '../../assets';


function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const { username, email, message } = formData;
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    
    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };    
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (username === '' || email ==='' || message==='') 
    
    {console.log(alert("somthing missing"))}
    else{
      
      emailjs.sendForm('service_zxjk7vx', 'template_x4c6s3u', form.current, 'pTLcR0tgocDhI0jgn')
      .then((result) => {
        console.log(result.text);
        setIsFormSubmitted(true);
      }, (error) => {
        console.log(error.text);
      });
    }
  };
    return (
          <div className="contact  component__space" id="contact">
          {!isFormSubmitted ? (
        <div className="row">
            <div className="col__2">
                <div className="contact__box">
                    <div className="contact__meta">
                        <h1 className="hire__text">Contact me</h1> <br />
                        <p className="hire__text ">I am available for work. Connect me </p>
                    </div>
                    <form ref={form} onSubmit={sendEmail} className="input__box">
                       <input type="text" className="contact name" placeholder="Your name *" name="username" value={username} onChange={handleChangeInput}/>
                       <input type="text" className="contact email" placeholder="Your Email *" name="email" value={email} onChange={handleChangeInput} />
                       <textarea id="message" placeholder="Write Your message" name="message" value={message} onChange={handleChangeInput}></textarea>
                      <input type="submit" value="Send"  className="btn contact pointer"/>
                    </form>
              </div>
            </div>
            <div className="col__2">
                <img src={photo} alt="" className="contact__img" />
             </div>
            </div>
                ) : (
    <div>
      <p className="head-text">
        Thank you!
      </p>
    </div>
  )}
    </div>
    )
}

export default Contact
