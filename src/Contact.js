import React, {Component} from 'react';
import Media from 'react-media'; 
import "./Contact.css";
import {ReactComponent as GitLogo} from './img/github-outline.svg';
import {ReactComponent as LinkedLogo} from './img/linkedin-outline.svg';
import {ReactComponent as EmailLogo} from './img/email-outline.svg';

class Contact extends Component {
    constructor(props) {
    super(props);
    this.state = {
    
        };
    }
    
    render(){
     
        return (
        
        <div className="contact">    
        
            <Media queries={{ small: "(max-width: 599px)" }}>
                {matches =>
                    matches.small ? (    
                    <div className="contact__mobile"> 
                        <div className="contact__mobile-header">
                            <h4>05. Contact</h4>
                        </div>
                        
                        <div className="contact__mobile-content">
                            <h3>I'm available for hire</h3>
                            
                            <form id="contact-form" method="POST">
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
                            
                            <div className="home__contact" style={{color: "black"}}>
                                <div className="home__contact-icons">
                                <GitLogo style={{color: "black"}}/>
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
    }
}

export default Contact;