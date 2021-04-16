import React from 'react';
import {ReactComponent as LeftBtn} from './img/arrowhead-left-outline.svg';
import {ReactComponent as RightBtn} from './img/arrowhead-right-outline.svg';


const Service = ({number, name, description, cards, clickLeft, clickRight}) => {
    const features = cards.map((item, index) => (
            <div key={item.id} className="services__mobile-content-card">
            
                <p>{item.name}</p>
                <img src={item.img} alt={item.name}/>
                <p className="mt-small">{item.desc}</p>
            
            </div>
        ));
    
    return (   
    <div className="services__mobile-content">
    
        <h3>{name}</h3>
        <p className="mt-medium">{description}</p>
        
        <div className="services__mobile-content-features mt-medium">
            {features}
            <LeftBtn onClick={() => clickLeft()} className="services__mobile-left-btn" style={{cursor: "pointer"}} />
            <RightBtn onClick={() => clickRight()} className="services__mobile-right-btn" style={{cursor: "pointer"}} />
        </div>
        
    </div>    
    );
};

export default Service;

