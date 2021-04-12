import React from 'react';
import {ReactComponent as ArrowBack} from '../img/arrow-ios-back-outline.svg';
import {ReactComponent as Line} from '../img/Line.svg';


const Unic = ({ history }) => (
    
    <div className="project__id-content">
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
        
            <div className="btn btn-white center" >
                <a href="#">Visit Page</a>
            </div>
            
            <Line style={{position: "absolute", bottom: ".5rem", left: "50%", transform: "translateX(-50%)"}} />
        
    </div>
    
    );
    
export default Unic;

    