import React from 'react';
import useWindowDimensions from "./WindowDimension.js";

const Service = ({number, name, description, cards, clickLeft, clickRight}) => {
    
    const { height } = useWindowDimensions();
    
    const features = cards.map((item, index) => (
            <div key={item.id} className="services__mobile-content-card">
            
                <p>{item.name}</p>
                <img src={item.img} alt={item.name}/>
                <p className="mt-small">{item.desc}</p>
            
            </div>
        ));
    
    return (   
    <div style={{height: height - 162}} className="services__mobile-content">
    
        <h3>{name}</h3>
        <p className="mt-medium">{description}</p>
        
        <div className="services__mobile-content-features mt-medium">
     
            {features}
            
        </div>
        
    </div>    
    );
};

export default Service;

