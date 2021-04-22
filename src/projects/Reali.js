import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as ArrowBack} from '../img/arrow-ios-back-outline.svg';
import {ReactComponent as Line} from '../img/Line.svg';
import {ReactComponent as BackButton} from '../img/back_button.svg';
import {ReactComponent as ForwardButton} from '../img/forward_button.svg';
import Media from 'react-media';
import Picture from "../img/Reali.png";
import Div100vh from 'react-div-100vh';

const Reali = ({ history }) => (
    
    <Media queries={{ small: "(max-width: 750px)" }}>
        {matches =>
            matches.small ? (  
    
    <Div100vh className="project__id-content">
        <div className="project__id-main" id="reali">
            <ArrowBack style={{ cursor: "pointer", margin: "2rem 1.5rem"}} onClick={() => history.goBack()} /> 
            
            <div className="project__id-main-text">
                <p style={{fontSize: "12px"}}>Featured Project</p>
                <h4 className="mt-small">Reali Landing Page</h4>
                <p className="mt-medium">Landing page for a real estate agency created with HTML, CSS and Sass extension. Entire layout is built using Grid Layout, which is the perfect choice for responsive web design. Layout changes depending on the device width.</p>
                <ul className="project__id-main-text-list mt-big">
                    <li>HTML</li>
                    <li>Sass</li>
                    <li>CSS Grid</li>
                    <li>Flexbox</li>
                </ul>
            </div>
            
        </div>
        
            <div className="project__id-bottom">
                <div className="btn btn-white" >
                    <a href="https://reali-estate.netlify.app/" target="_blank" rel="noopener noreferrer">Visit Page</a>
                </div>
            </div>
            
            <Line style={{position: "absolute", bottom: ".5rem", left: "50%", transform: "translateX(-50%)"}} />
        
    </Div100vh>
    
    ) : (
    
    <div className="project__id-laptop">
        <div className="project__id-num"><h1>06.</h1></div> 
            <div className="project__id-laptop-content">
                <img src={Picture} alt="reali_landing_page" />
                <div className="project__id-laptop-content-text">
                    <p>Featured Project<br /><span>Reali Landing Page</span></p>
                    <div className="project__id-laptop-content-text-box mt-medium">
                        <p>Landing page for a real estate agency created with HTML, CSS and Sass extension. Entire layout is built using Grid Layout, which is the perfect choice for responsive web design. Layout changes depending on the device width.</p>
                    </div>
                    <div className="clear-float"></div>
                    <ul className="project__id-laptop-content-text-list list-small mt-medium">
                        <li>HTML</li>
                        <li>Sass</li>
                        <li>CSS Grid</li>
                        <li>Flexbox</li>
                    </ul>
                </div>
            </div>
            
             <Link className="project__id-laptop-button-back" to="/portfolio/crypto_web">
            <BackButton  />
            </Link>
             <div className="btn project__id-laptop-btn">
            <a href="https://reali-estate.netlify.app/" target="_blank" rel="noopener noreferrer">Visit Page</a>
            </div>
            <Link className="project__id-laptop-button-forward" to="/portfolio/trillo_page">
            <ForwardButton  />
            </Link>
            
        </div>
            )
        }
    </Media>
    
    
    );
    
export default Reali;

    