import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as ArrowBack} from '../img/arrow-ios-back-outline.svg';
import {ReactComponent as Line} from '../img/Line.svg';
import {ReactComponent as BackButton} from '../img/back_button.svg';
import {ReactComponent as ForwardButton} from '../img/forward_button.svg';
import Media from 'react-media';
import Picture from "../img/Crypto.png"; 
import Div100vh from 'react-div-100vh';


const Crypto = ({ history }) => (
    
    <Media queries={{ small: "(max-width: 599px)" }}>
        {matches =>
            matches.small ? (  
    
    <Div100vh className="project__id-content">
        <div className="project__id-main" id="crypto">
            <ArrowBack style={{ cursor: "pointer", margin: "2rem 1.5rem"}} onClick={() => history.goBack()} /> 
            
            <div className="project__id-main-text">
                <p style={{fontSize: "12px"}}>Featured Project</p>
                <h4 className="mt-small">Crypto News web & blog</h4>
                <p className="mt-medium">Single page React app which features cryptocurrency news and exchange rates updated every 30 seconds. The app fetches data from several APIs using Axios library.</p>
                <ul className="project__id-main-text-list mt-big">
                    <li>React JS</li>
                    <li>CSS</li>
                    <li>Axios</li>
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
        <div className="project__id-num"><h1>05.</h1></div> 
            <div className="project__id-laptop-content">
                <img src={Picture} alt="crypto_news_and_blog" />
                <div className="project__id-laptop-content-text">
                    <p>Featured Project<br /><span>Crypto News web & blog</span></p>
                    <div className="project__id-laptop-content-text-box mt-medium">
                        <p>Single page React app which features cryptocurrency news and exchange rates updated every 30 seconds. The app fetches data from several APIs using Axios library.</p>
                    </div>
                    <div className="clear-float"></div>
                    <ul className="project__id-laptop-content-text-list list-small mt-medium">
                        <li>React JS</li>
                        <li>CSS</li>
                        <li>Axios</li>
                    </ul>
                </div>
            </div>
            
             <Link className="project__id-laptop-button-back" to="/portfolio/unic_twitter_clone">
            <BackButton  />
            </Link>
             <div className="btn project__id-laptop-btn">
            <a href="#">Visit Page</a>
            </div>
            <Link className="project__id-laptop-button-forward" to="/portfolio/reali_landing">
            <ForwardButton  />
            </Link>
            
        </div>
            )
        }
    </Media>
    
    );
    
export default Crypto;

    