import React, {Component} from 'react';
import Media from 'react-media'; 
import "./Contact.css";
import {ReactComponent as GitLogo} from './img/github-outline_1.svg';
import {ReactComponent as LinkedLogo} from './img/linkedin-outline_1.svg';
import {ReactComponent as EmailLogo} from './img/email-outline_1.svg';
import useWindowDimensions from "./WindowDimension.js";

const Contact = () => {
    
    const { height } = useWindowDimensions();
    
    return (
        
        <div className="contact">    
        
            <Media queries={{ small: "(max-width: 599px)" }}>
                {matches =>
                    matches.small ? (    
                    <div className="contact__mobile"> 
                        <div className="contact__mobile-header">
                            <h4>05. Get in touch</h4>
                        </div>
                        
                        <div style={{height: height - 162}} className="contact__mobile-content">
                            <h3>I'm available for hire!</h3>
                            
                            <form className="contact-form" method="POST">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Name" />
                                </div>
                                
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>
                                
                                <div className="form-group">
                                    <textarea className="form-control" rows="5" placeholder="Type your message"></textarea>
                                </div>
                                
                                <div className="form-group">
                                <button type="submit" className="btn">Submit</button>
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
                    
                    <div></div>
                    )
                }
            </Media>
        </div>    
        );
    };


export default Contact;