import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as ArrowBack} from '../img/arrow-ios-back-outline.svg';
import {ReactComponent as Line} from '../img/Line.svg';
import {ReactComponent as BackButton} from '../img/back_button.svg';
import {ReactComponent as ForwardButton} from '../img/forward_button.svg';
import Media from 'react-media';
import Picture from "../img/Trillo.png"; 


const Trillo = ({ history }) => (
    
    <Media queries={{ small: "(max-width: 599px)" }}>
        {matches =>
            matches.small ? (  
    
    <div className="project__id-content">
        <div className="project__id-main" id="trillo">
            <ArrowBack style={{ cursor: "pointer", margin: "2rem 1.5rem"}} onClick={() => history.goBack()} /> 
            
            <div className="project__id-main-text">
                <p style={{fontSize: "12px"}}>Featured Project</p>
                <h4 className="mt-small">Trillo Web Page</h4>
                <p className="mt-medium">A single page design for a Trillo project. Entire layout was constructed with CSS Flexbox.</p>
                <ul className="project__id-main-text-list mt-big">
                    <li>HTML</li>
                    <li>Sass</li>
                    <li>Flexbox</li>
                </ul>
            </div>
            
        </div>
        
            <div className="btn btn-white center" >
                <a href="#">Visit Page</a>
            </div>
            
            <Line style={{position: "absolute", bottom: ".5rem", left: "50%", transform: "translateX(-50%)"}} />
        
    </div>

    ) : (
    
    <div className="project__id-laptop">
        <div className="project__id-num"><h1>07.</h1></div> 
            <div className="project__id-laptop-content">
                <img src={Picture} alt="trillo_web_page" />
                <div className="project__id-laptop-content-text">
                    <p>Featured Project<br /><span>Trillo Web Page</span></p>
                    <div className="project__id-laptop-content-text-box mt-medium">
                        <p>A single page design for a Trillo project. Entire layout was constructed with CSS Flexbox.</p>
                    </div>
                    <div className="clear-float"></div>
                    <ul className="project__id-main-text-list list-small mt-medium">
                        <li>HTML</li>
                        <li>Sass</li>
                        <li>Flexbox</li>
                    </ul>
                </div>
            </div>
            
             <Link className="project__id-laptop-button-back" to="/portfolio/reali_landing">
            <BackButton  />
            </Link>
             <div className="btn project__id-laptop-btn">
            <a href="#">Visit Page</a>
            </div>
            <Link className="project__id-laptop-button-forward" to="/portfolio/todo_list">
            <ForwardButton  />
            </Link>
            
        </div>
            )
        }
    </Media>
    
    
    );
    
export default Trillo;

    