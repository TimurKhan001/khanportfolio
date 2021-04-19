import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as ArrowBack} from '../img/arrow-ios-back-outline.svg';
import {ReactComponent as Line} from '../img/Line.svg';
import {ReactComponent as BackButton} from '../img/back_button.svg';
import {ReactComponent as ForwardButton} from '../img/forward_button.svg';
import Media from 'react-media';
import Picture from "../img/EndlessWinter.png";
import Div100vh from 'react-div-100vh';

const EndlessWinter = ({ history }) => (
    
    <Media queries={{ small: "(max-width: 599px)" }}>
        {matches =>
            matches.small ? (    
    
        <Div100vh className="project__id-content" >
    
            <div className="project__id-main" id="endless-winter" >
                <ArrowBack style={{ cursor: "pointer", margin: "2rem 1.5rem"}} onClick={() => history.goBack()} /> 
            
                <div className="project__id-main-text">
                    <p style={{fontSize: "12px"}}>Featured Project</p>
                    <h4 className="mt-small">Endless Winter Website</h4>
                    <p className="mt-medium">A website presenting the Endless Winter company from Austria. The website was developed using several JavaScript libraries with Node JS and Express on the backend. All queries from the webpage are saved to the database and sent to the company’s email.</p>
                    <ul className="project__id-main-text-list mt-big">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JS</li>
                        <li>JQuery</li>
                        <li>Pagepiling JS</li>
                        <li>SweetAlert2</li>
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
            <div className="project__id-num"><h1>01.</h1></div> 
            <div className="project__id-laptop-content">
                <img src={Picture} alt="endless_winter_webpage" />
                <div className="project__id-laptop-content-text">
                    <p>Featured Project<br /><span>Endless Winter Website</span></p>
                    <div className="project__id-laptop-content-text-box mt-medium">
                        <p>A website presenting the Endless Winter company from Austria. The website was developed using several JavaScript libraries with Node JS and Express on the backend. All queries from the webpage are saved to the database and sent to the company’s email.</p>
                    </div>
                    <div className="clear-float"></div>
                    <ul className="project__id-laptop-content-text-list list-small mt-medium">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JS</li>
                        <li>JQuery</li>
                        <li>Pagepiling JS</li>
                        <li>SweetAlert2</li>
                    </ul>
                </div>
            </div>
            
            <Link className="project__id-laptop-button-back" to="/portfolio/todo_list">
            <BackButton  />
            </Link>
             <div className="btn project__id-laptop-btn">
            <a href="#">Visit Page</a>
            </div>
            <Link className="project__id-laptop-button-forward" to="/portfolio/khanproject">
            <ForwardButton  />
            </Link>
            
        </div>
            )
        }
    </Media>
    
    );
    
export default EndlessWinter;

    