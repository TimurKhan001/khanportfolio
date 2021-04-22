import React from 'react';
import useWindowDimensions from "./WindowDimension.js";
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const Service = ({id, number, name, description, cards}) => {
    return (
            <TransitionGroup className="transition">
                <CSSTransition
                key={id}
                timeout={800}
                classNames="fade"
                >
                    <ServiceContent key={id} id={id} number={number} name={name} description={description} cards={cards}/>
        
            </CSSTransition>
            </TransitionGroup> 
    
    );
};


const ServiceContent = ({id, number, name, description, cards}) => {
    
    const { height } = useWindowDimensions();
    
    const features = cards.map((item, index) => (
            <div key={item.id} className="services__mobile-content-card">
            
                <p>{item.name}</p>
                <img src={item.img} alt={item.name}/>
                <span><p className="mt-small">{item.desc}</p></span>
            
            </div>
        ));
    
    return (   
    <div style={{height: height - 162}} className="services__mobile-content">
    
        <h4>{name}</h4>
        <p className="mt-medium">{description}</p>
        
        <div className="services__mobile-content-features mt-medium">
     
            {features}
            
        </div>
        
    </div>    
    );
};

export default Service;

