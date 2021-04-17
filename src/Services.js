import React, {Component} from 'react';
import Media from 'react-media'; 
import "./Services.css";
import data from "./data/data";
import Service from "./Service";
import {ReactComponent as LeftBtn} from './img/arrowhead-left-outline_1.svg';
import {ReactComponent as RightBtn} from './img/arrowhead-right-outline_1.svg';


class Services extends Component {
    constructor(props) {
    super(props);
    this.state = {
        service: data.services[0]
        };
    }
    
    nextService = () => {
      let change = Object.assign({}, this.state);
      let index = data.services.indexOf(change.service);
      index++;
      if (index === data.services.length) {
        index = 0;
      }
      change.service = data.services[index];
      this.setState(change);
    }
    
    prevService = () => {
      let change = Object.assign({}, this.state);
      let index = data.services.indexOf(change.service);
      index--;
      if(index < 0) {
        index = data.services.length - 1;
      }
      change.service = data.services[index];
      this.setState(change);
    }
    
    render(){
        const {id, number, name, description, cards} = this.state.service;
        
        return (
        
        <div className="services">    
        
            <Media queries={{ small: "(max-width: 599px)" }}>
                {matches =>
                    matches.small ? (    
                    <div className="services__mobile"> 
                        <div className="services__mobile-header">
                             <LeftBtn onClick={() => this.prevService()} style={{cursor: "pointer"}} />
                            <h4>03. Services</h4>
                            <RightBtn onClick={() => this.nextService()} style={{cursor: "pointer"}} />
                        </div>
                        
                        <Service key={id} number={number} name={name} description={description} cards={cards} clickLeft={this.prevService} clickRight={this.nextService} />

                    
                    </div>
                    
                    ) : (
                    
                    <div></div>
                    )
                }
            </Media>
        </div>    
        );
    }
}

export default Services;