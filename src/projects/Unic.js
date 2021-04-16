import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as ArrowBack} from '../img/arrow-ios-back-outline.svg';
import {ReactComponent as Line} from '../img/Line.svg';
import {ReactComponent as BackButton} from '../img/back_button.svg';
import {ReactComponent as ForwardButton} from '../img/forward_button.svg';
import Media from 'react-media';
import Picture from "../img/Unic.png";
import Div100vh from 'react-div-100vh';


const Unic = ({ history }) => (
    
    <Media queries={{ small: "(max-width: 599px)" }}>
        {matches =>
            matches.small ? (  
    
    <Div100vh className="project__id-content">
        <div className="project__id-main" id="unic">
            <ArrowBack style={{ cursor: "pointer", margin: "2rem 1.5rem"}} onClick={() => history.goBack()} /> 
            
            <div className="project__id-main-text">
                <p style={{fontSize: "12px"}}>Featured Project</p>
                <h4 className="mt-small">Unic Twitter Clone</h4>
                <p className="mt-medium">This is a Twitter clone REST API with a JWT encrypted authentication. Backend is built with Node JS consists of Express, Mongoose, and BodyParser. The Frontend is built with React, React Router, and Redux.</p>
                <ul className="project__id-main-text-list mt-big">
                    <li>React JS</li>
                    <li>CSS</li>
                    <li>Node JS</li>
                    <li>Mongo DB</li>
                    <li>React Redux</li>
                    <li>React Router</li>
                </ul>
            </div>
            
        </div>
        
            <div className="project__id-bottom">
                <div className="btn btn-white" >
                    <a href="#">Visit Page</a>
                </div>
            </div>
            
            <Line style={{position: "absolute", bottom: ".5rem", left: "50%", transform: "translateX(-50%)"}} />
        
    </Div100vh>
    
    ) : ( 
    
      <div className="project__id-laptop">
            <div className="project__id-num"><h1>04.</h1></div> 
            <div className="project__id-laptop-content">
                <img src={Picture} alt="unic_twitter_clone" />
                <div className="project__id-laptop-content-text">
                    <p>Featured Project<br /><span>Unic Twitter Clone</span></p>
                    <div className="project__id-laptop-content-text-box mt-medium">
                        <p>This is a Twitter clone REST API with a JWT encrypted authentication. Backend is built with Node JS consists of Express, Mongoose, and BodyParser. The Frontend is built with React, React Router, and Redux.</p>
                    </div>
                    <div className="clear-float"></div>
                    <ul className="project__id-laptop-content-text-list mt-medium">
                        <li>React JS</li>
                        <li>CSS</li>
                        <li>Node JS</li>
                        <li>Mongo DB</li>
                        <li>React Redux</li>
                        <li>React Router</li>
                    </ul>
                </div>
            </div>
            
             <Link className="project__id-laptop-button-back" to="/portfolio/kamchatka_tours">
            <BackButton  />
            </Link>
             <div className="btn project__id-laptop-btn">
            <a href="#">Visit Page</a>
            </div>
            <Link className="project__id-laptop-button-forward" to="/portfolio/crypto_web">
            <ForwardButton  />
            </Link>
            
        </div>
            )
        }
    </Media>
    
    );
    
export default Unic;

    