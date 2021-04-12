import React from 'react';
import {ReactComponent as ArrowBack} from '../img/arrow-ios-back-outline.svg';
import {ReactComponent as Line} from '../img/Line.svg';


const Kamchatka = ({ history }) => (
    
    <div className="project__id-content">
        <div className="project__id-main" id="kamchatka">
            <ArrowBack style={{ cursor: "pointer", margin: "2rem 1.5rem"}} onClick={() => history.goBack()} /> 
            
            <div className="project__id-main-text">
                <p style={{fontSize: "12px"}}>Featured Project</p>
                <h4 className="mt-small">Kamchatka Tours Landing Page</h4>
                <p className="mt-medium">A landing page presenting the offer of a Kamchatka travel agency. The project was built with only HTML and CSS with Sass extension. The website contains a lot of SVG elements, animations on hover, and a full-page scaling navigation menu.</p>
                <ul className="project__id-main-text-list mt-big">
                    <li>HTML</li>
                    <li>CSS</li>
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
    
    );
    
export default Kamchatka;

    