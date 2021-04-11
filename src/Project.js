import React from 'react';
import SwitchProjects from "./SwitchProjects";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {Link, useParams, useRouteMatch} from 'react-router-dom';

const Slide = ({id, route, name, image, small_description }) => {
    let { path, url } = useRouteMatch();
    return (
        
        <div className="project">
            <div className="project__img">
            <img src={image} alt="image"/>
            </div>
            <div className="project__description">
            <h3>{name}</h3>
            <p className="mt-small desc_text">{small_description}</p>
            </div>
            <div className="btn" >
                 <Link to={`${url}/${route}`}>View Project</Link>
            </div>
        </div>   
    );
};

const Project = ({id, route, name, image, small_description, }) => {
    return (
        <TransitionGroup className="project__transition">
            <CSSTransition
            key={id}
            timeout={1000}
            classNames="fade"
            >
                <Slide key={id} route={route} name={name} small_description={small_description} image={image} />
            </CSSTransition>
        </TransitionGroup>
    )
}

export default Project;

