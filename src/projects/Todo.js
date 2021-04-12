import React from 'react';
import {ReactComponent as ArrowBack} from '../img/arrow-ios-back-outline.svg';
import {ReactComponent as Line} from '../img/Line.svg';


const Todo = ({ history }) => (
    
    <div className="project__id-content">
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
        
            <div className="btn btn-white center" >
                <a href="#">Visit Page</a>
            </div>
            
            <Line style={{position: "absolute", bottom: ".5rem", left: "50%", transform: "translateX(-50%)"}} />
        
    </div>
    
    );
    
export default Todo;

    