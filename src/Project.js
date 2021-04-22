import React from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {Link, useRouteMatch} from 'react-router-dom';
import useWindowDimensions from "./WindowDimension.js";


const Slide = ({id, route, name, image, small_description}) => {
    let { url } = useRouteMatch();
    const { height } = useWindowDimensions();
    
    const handleClick = () => {
        window.scrollTo(0, 0);
    };
    
    return (
        
 
        
        
        <div style={{height: height - 162}} className="portfolio__mobile-content">
            <div className="portfolio__mobile__img">
            <img src={image} alt="project_mashup"/>
            </div>
            <div className="portfolio__mobile-description">
            <h3>{name}</h3>
            <p className="mt-small ">{small_description}</p>
            </div>
            <div className="btn" >
                 <Link onClick={handleClick} to={`${url}/${route}`}>View Project</Link>
            </div>
        </div>  
        
  
    
    );
};

const Project = ({id, route, name, image, small_description}) => {
    return (
      
        <TransitionGroup className="transition">
        <CSSTransition
            key={id}
            timeout={800}
            classNames="fade"
            >

        <Slide key={id} id={id} route={route} name={name} small_description={small_description} image={image} />
        
        </CSSTransition>
        </TransitionGroup>       
      
    );
};

export default Project;
