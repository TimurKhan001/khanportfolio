import React from 'react';
import {ReactComponent as ArrowBack} from '../img/arrow-ios-back-outline.svg';
import {ReactComponent as Line} from '../img/Line.svg';
import Media from 'react-media';


const EndlessWinter = ({ history }) => (
    
    <Media queries={{ small: "(max-width: 599px)" }}>
        {matches =>
            matches.small ? (    
    
        <div className="project__id-content">
    
        <div className="project__id-main" id="endless-winter">
            <ArrowBack style={{ cursor: "pointer", margin: "2rem 1.5rem"}} onClick={() => history.goBack()} /> 
            
            <div className="project__id-main-text">
                <p style={{fontSize: "12px"}}>Featured Project</p>
                <h4 className="mt-small">Endless Winter Webpage</h4>
                <p className="mt-medium">A website presenting the Endless Winter company from Austria. The website was developed using several JavaScript libraries with Node JS and Express on the backend. All queries from the webpage are saved to the database and sent to the company’s email.</p>
                <ul className="project__id-main-text-list mt-big">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JS</li>
                    <li>JQuery</li>
                    <li>Pagepiling JS</li>
                    <li>SweetAlert2 JS</li>
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
            <ArrowBack style={{ cursor: "pointer", margin: "2rem 1.5rem"}} onClick={() => history.goBack()} /> 
        </div>
            )
        }
    </Media>
    
    );
    
export default EndlessWinter;

    