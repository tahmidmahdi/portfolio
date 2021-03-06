import React from 'react';
import './Contract.css'
import emailjs from 'emailjs-com';

const Contract = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_px609bj', 'template_2hmgsln', e.target, 'user_FuU47gmscPa0RFTjtRr0P')
          .then((result) => {
              console.log(result);
          }, (error) => {
              console.log(error.text);
          });

          
        }
    
    return (
        <div className="contract" id="contract">
            <h1><span className="span-text">05</span> Contract Me</h1>
            <small><span className="span-text">As I am finding new scopes, my email is always open to receive from you. Fill up the form below and click submit. I will surely give reply to your text</span></small>
            <form className="contact-form mt-5" onSubmit={sendEmail} data-aos="fade-down">
                
                <label><span className="span-text">Name</span></label>
                <br/> 
                <input type="text" name="user_name" placeholder="Enter Your Name" required/>
                <br/> 
                <label><span className="span-text">Email</span></label>
                <br/>
                <input type="email" name="user_email" placeholder="Enter Your Email" required/>
                <br/>
                <label><span className="span-text">Message</span></label>
                <br/>
                <textarea name="message" placeholder="Enter Your Message" required/>
                <br/>
                {/* <input type="submit" value="Send" className='button'/> */}
                <br/>
                <button className="button" type="submit">Submit</button>
                {/* <input type="submit" value='Send' className='button'/> */}
            </form>

            <footer className="text-center mt-5 span-text">© Copyright {new Date().getFullYear()} Tahmid Mahdi. All rights are reserved</footer>
        </div>
    );
};

export default Contract;