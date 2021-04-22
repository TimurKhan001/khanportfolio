import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as ArrowBack} from '../img/arrow-ios-back-outline.svg';
import {ReactComponent as Line} from '../img/Line.svg';
import {ReactComponent as BackButton} from '../img/back_button.svg';
import {ReactComponent as ForwardButton} from '../img/forward_button.svg';
import Media from 'react-media';
import Picture from "../img/ToDo.png"; 
import Div100vh from 'react-div-100vh';

const Todo = ({ history }) => (
    
    <Media queries={{ small: "(max-width: 750px)" }}>
        {matches =>
            matches.small ? ( 
    
    <Div100vh className="project__id-content">
        <div className="project__id-main" id="todo">
            <ArrowBack style={{ cursor: "pointer", margin: "2rem 1.5rem"}} onClick={() => history.goBack()} /> 
            
            <div className="project__id-main-text">
                <p style={{fontSize: "12px"}}>Featured Project</p>
                <h4 className="mt-small">To-Do List Project</h4>
                <p className="mt-medium">Partly to learn and partly because I needed one, I decided to build a simple organizer app using React JS to keep track of my to-do's. </p>
                <ul className="project__id-main-text-list mt-big">
                    <li>React JS</li>
                    <li>CSS</li>
                    <li>Node JS</li>
                    <li>Mongo DB</li>
                    <li>Flexbox</li>
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
        <div className="project__id-num"><h1>08.</h1></div> 
            <div className="project__id-laptop-content">
                <img src={Picture} alt="todo_list _project" />
                <div className="project__id-laptop-content-text">
                    <p>Featured Project<br /><span>To-Do List Project</span></p>
                    <div className="project__id-laptop-content-text-box mt-medium">
                        <p>Partly to learn and partly because I needed one, I decided to build a simple organizer app using React JS to keep track of my to-do's.</p>
                    </div>
                    <div className="clear-float"></div>
                    <ul className="project__id-laptop-content-text-list list-small mt-medium">
                        <li>React JS</li>
                        <li>CSS</li>
                        <li>Node JS</li>
                        <li>Mongo DB</li>
                        <li>Flexbox</li>
                    </ul>
                </div>
            </div>
            
            <Link className="project__id-laptop-button-back" to="/portfolio/trillo_page">
            <BackButton  />
            </Link>
            <div className="btn project__id-laptop-btn">
            <a href="#">Visit Page</a>
            </div>
            <Link className="project__id-laptop-button-forward" to="/portfolio/endless_winter_project">
            <ForwardButton  />
            </Link>
            
        </div>
            )
        }
    </Media>
    
    );
    
export default Todo;

    