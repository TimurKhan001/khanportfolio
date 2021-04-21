import React, {Component, useState} from 'react';
import Media from 'react-media'; 
import "./Contact.css";
import {ReactComponent as GitLogo} from './img/github-outline_1.svg';
import {ReactComponent as LinkedLogo} from './img/linkedin-outline_1.svg';
import {ReactComponent as EmailLogo} from './img/email-outline_1.svg';
import {ReactComponent as GitLogoWhite} from './img/github-outline.svg';
import {ReactComponent as LinkedLogoWhite} from './img/linkedin-outline.svg';
import {ReactComponent as EmailLogoWhite} from './img/email-outline.svg';
import useWindowDimensions from "./WindowDimension.js";

const Contact = () => {

    //Form manipulation  
const [status, setStatus] = useState("Submit");    
const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

let response = await window.fetch("http://35.158.111.241:8081/contact", {
      method: "post",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
 setStatus("Submit");
    let result = await response.json();
    alert(result.status);
    window.location.reload();
  };    
    
const { height } = useWindowDimensions();
    
return (
        
    <div className="contact">    
        
        <Media queries={{ small: "(max-width: 750px)" }}>
            {matches =>
                matches.small ? (    
                    <div className="contact__mobile"> 
                        <div className="contact__mobile-header">
                            <h4>05. Get in touch</h4>
                        </div>
                        
                        <div style={{height: height - 162}} className="contact__mobile-content">
                            <h3>I'm available for hire!</h3>
                            
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Name" id="name" required  />
                                </div>
                                    
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email" id="email" required />
                                </div>
                                    
                                <div className="form-group">
                                    <textarea className="form-control" rows="5" placeholder="Type your message" id="message" required></textarea>
                                </div>
                                    
                                <div className="form-group">
                                <button style={{cursor: "pointer"}} type="submit" className="btn">Send</button>
                                </div>
                                    
                            </form>
                            
                            <div className="contact__icons">
                                <div className="contact-icons-right">
                                <GitLogo/>
                                <LinkedLogo />
                                <EmailLogo /> 
                                </div>
                            </div>
                        </div>
                    </div>
                    
                ) : (
                    
                    <div className="contact__laptop">
                        <div className="contact__laptop-title">
                            <h4>05. Get in touch </h4>
                        </div> 
                        
                        <div className="contact__laptop-content">
                            <div className="contact__laptop-text mt-big">
                                <p>You can contact me by using the contact form below or by sending an e-mail to timurkhan@seznam.cz. I always respond to messages within 24 hrs.</p>
                                
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-group mt-big">
                                        <input type="text" className="form-control" placeholder="Name" id="name" required/>
                                    </div>
                                        
                                    <div className="form-group mt-medium">
                                        <input type="email" className="form-control" placeholder="Email" id="email" required/>
                                    </div>
                                        
                                    <div className="form-group mt-medium">
                                        <textarea className="form-control" rows="5" placeholder="Type your message" id="message" required></textarea>
                                    </div>
                                        
                                    <div className="form-group mt-big">
                                        <button style={{cursor: "pointer"}} type="submit" className="btn">Send</button>
                                    </div>
                                </form>
                            </div>
                            
                            <div className="home__contact">
                                <div className="home__contact-icons">
                                    <GitLogoWhite />
                                    <LinkedLogoWhite />
                                    <EmailLogoWhite /> 
                                </div>
                            </div>
                            
                            <div className="contact__laptop-email">
                                <div className="contact__laptop-email-top">
                                    <p>timurkhan@seznam.cz</p>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>    
                )
            }
        </Media>
    </div>    
    );
};


export default Contact;