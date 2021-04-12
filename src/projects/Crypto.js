import React from 'react';
import {ReactComponent as ArrowBack} from '../img/arrow-ios-back-outline.svg';
import {ReactComponent as Line} from '../img/Line.svg';


const Crypto = ({ history }) => (
    
    <div className="project__id-content">
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
        
            <div className="btn btn-white center" >
                <a href="#">Visit Page</a>
            </div>
            
            <Line style={{position: "absolute", bottom: ".5rem", left: "50%", transform: "translateX(-50%)"}} />
        
    </div>
    
    );
    
export default Crypto;

    