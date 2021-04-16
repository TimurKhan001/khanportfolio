import React, {Component} from 'react';
import Media from 'react-media'; 
import "./Services.css";
import data from "./data/data";
import Service from "./Service";
import Div100vh from 'react-div-100vh';

class Services extends Component {
    constructor(props) {
    super(props);
    this.state = {
        service: data.services[0]
        };
    }
    
    nextService = () => {
      let change = Object.assign({}, this.state);
      let index = data.services.indexOf(change.project);
      index++;
      if (index === data.services.length) {
        index = 0;
      }
      change.service = data.services[index];
      this.setState(change);
    }
    
    prevService = () => {
      let change = Object.assign({}, this.state);
      let index = data.services.indexOf(change.project);
      index--;
      if(index < 0) {
        index = data.services.length - 1;
      }
      change.service = data.services[index];
      this.setState(change);
    }
    
    componentDidMount() {
        console.log(this.state);
    }
    
    render(){
        const {id, number, name, description, cards} = this.state.service;
        
        return (
        
        <div className="services">    
        
            <Media queries={{ small: "(max-width: 599px)" }}>
                {matches =>
                    matches.small ? (    
                    <Div100vh className="services__mobile"> 
                        <div className="services__mobile-header">
                            <h4>03. Services</h4>
                        </div>
                        
                        <Service key={id} number={number} name={name} description={description} cards={cards} clickLeft={this.prevService} clickRight={this.nextService} />

                    
                    </Div100vh>
                    
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