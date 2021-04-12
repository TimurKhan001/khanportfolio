import React from 'react';
import {ReactComponent as ArrowBack} from '../img/arrow-ios-back-outline.svg';
import {ReactComponent as Line} from '../img/Line.svg';


const Reali = ({ history }) => (
    
    <div className="project__id-content">
        <div className="project__id-main" id="reali">
            <ArrowBack style={{ cursor: "pointer", margin: "2rem 1.5rem"}} onClick={() => history.goBack()} /> 
            
            <div className="project__id-main-text">
                <p style={{fontSize: "12px"}}>Featured Project</p>
                <h4 className="mt-small">Reali Landing Page</h4>
                <p className="mt-medium">Landing page for a real estate agency created with HTML, CSS and Sass extension. Entire layout is built using Grid Layout, which is the perfect choice for responsive web design. Layout changes depending on the device width.</p>
                <ul className="project__id-main-text-list mt-big">
                    <li>HTML</li>
                    <li>Sass</li>
                    <li>CSS Grid Layout</li>
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
    
export default Reali;

    