import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as ArrowBack} from '../img/arrow-ios-back-outline.svg';
import {ReactComponent as Line} from '../img/Line.svg';
import {ReactComponent as BackButton} from '../img/back_button.svg';
import {ReactComponent as ForwardButton} from '../img/forward_button.svg';
import Media from 'react-media';
import Picture from "../img/KhanProject.png"; 
import Div100vh from 'react-div-100vh';

const KhanProject = ({ history }) => (
    
    <Media queries={{ small: "(max-width: 750px)" }}>
        {matches =>
            matches.small ? (    
    
    <Div100vh className="project__id-content">
        <div className="project__id-main" id="khanproject">
            <ArrowBack style={{ cursor: "pointer", margin: "2rem 1.5rem"}} onClick={() => history.goBack()} /> 
            
            <div className="project__id-main-text">
                <p style={{fontSize: "12px"}}>Featured Project</p>
                <h4 className="mt-small">Khan.Project Portfolio Website</h4>
                <p className="mt-medium">A website in two languages presenting the offer and portfolio of a Czech company providing architectural services. The website is connected to a database, which stores all the leads gathered from the contact form. The project was carried out in a dark minimalistic design.</p>
                <ul className="project__id-main-text-list mt-big">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Vanilla JS</li>
                    <li>Node JS</li>
                    <li>Mongo DB</li>
                    <li>CSS Grid</li>
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
            <div className="project__id-num"><h1>02.</h1></div> 
            <div className="project__id-laptop-content">
                <img src={Picture} alt="khanproject_portfolio_webpage" />
                <div className="project__id-laptop-content-text">
                    <p>Featured Project<br /><span>Khan.Project Portfolio Website</span></p>
                    <div className="project__id-laptop-content-text-box mt-medium">
                        <p>A website in two languages presenting the offer and portfolio of a Czech company providing architectural services. The website is connected to a database, which stores all the leads gathered from the contact form. The project was carried out in a dark minimalistic design.</p>
                    </div>
                    <div className="clear-float"></div>
                    <ul className="project__id-laptop-content-text-list list-small mt-medium">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Vanilla JS</li>
                        <li>Node JS</li>
                        <li>Mongo DB</li>
                        <li>CSS Grid</li>
                    </ul>
                </div>
            </div>
            
            <Link className="project__id-laptop-button-back" to="/portfolio/endless_winter_project">
            <BackButton  />
            </Link>
             <div className="btn project__id-laptop-btn">
            <a href="#">Visit Page</a>
            </div>
            <Link className="project__id-laptop-button-forward" to="/portfolio/kamchatka_tours">
            <ForwardButton  />
            </Link>
            
        </div>
            )
        }
    </Media>
    
    );
    
export default KhanProject;

    