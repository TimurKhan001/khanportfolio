import React from 'react';
import './Home.css';
import {ReactComponent as GitLogo} from './img/github-outline.svg';
import {ReactComponent as LinkedLogo} from './img/linkedin-outline.svg';
import {ReactComponent as EmailLogo} from './img/email-outline.svg';
import {ReactComponent as ClickMe} from './img/ClickMe.svg';
const Home = () => (
    
    <div className="home">
        <div className="home__click-me">
        <ClickMe />
        </div>
        <h3>Hi,<br /> I’m Tim,</h3>
        <h2>A full-stack<br /> web developer</h2>
        <div className="btn mt-medium">
            <a href="#">Get In Touch</a>
        </div>
        
        <div className="home__contact">
            <div className="home__contact-icons">
                <GitLogo />
                <LinkedLogo />
                <EmailLogo /> 
            </div>
        </div>
    </div>
);

export default Home;