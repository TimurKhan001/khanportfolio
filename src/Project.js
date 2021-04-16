import React from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {Link, useRouteMatch} from 'react-router-dom';
import {ReactComponent as LeftBtn} from './img/arrowhead-left-outline.svg';
import {ReactComponent as RightBtn} from './img/arrowhead-right-outline.svg';

const Slide = ({id, route, name, image, small_description, number, clickLeft, clickRight}) => {
    let { url } = useRouteMatch();
    return (
        
        <div className="project">
            <div className="project__img">
            <img src={image} alt="project_mashup"/>
            </div>
            <div className="project__description">
            <h3>{name}</h3>
            <p className="mt-small ">{small_description}</p>
            </div>
            <div className="btn" >
                 <Link to={`${url}/${route}`}>View Project</Link>
            </div>
            <div className="portfolio__content-nav">
                <LeftBtn onClick={() => clickLeft()} style={{cursor: "pointer"}} />
                <h4 className="portfolio__content-nav-counter">{id} of {number} </h4>
                <RightBtn onClick={() => clickRight()} style={{cursor: "pointer"}} />
            </div>
        </div>   
    );
};

const Project = ({id, route, name, image, small_description, number, clickLeft, clickRight}) => {
    return (
        <TransitionGroup className="project__transition">
            <CSSTransition
            key={id}
            timeout={1000}
            classNames="fade"
            >
                <Slide key={id} id={id} route={route} name={name} small_description={small_description} image={image} number={number}  clickLeft={clickLeft} clickRight={clickRight} />
            </CSSTransition>
        </TransitionGroup>
    )
}

export default Project;

