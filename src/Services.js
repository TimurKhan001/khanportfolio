import React, {Component} from 'react';
import Media from 'react-media';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import "./Services.css";
import data from "./data/data";
import Service from "./Service";
import {ReactComponent as LeftBtn} from './img/arrowhead-left-outline_1.svg';
import {ReactComponent as RightBtn} from './img/arrowhead-right-outline_1.svg';
import {ReactComponent as BackButton} from './img/back_button.svg';
import {ReactComponent as ForwardButton} from './img/forward_button.svg';


const ServiceLaptop = ({id, name, number, description, cards, clickLeft, clickRight}) => {
    const features = cards.map((item, index) => (
            <div key={item.id} className="services__laptop-content-card">
                <p>{item.name}</p>
                <img src={item.img} alt={item.name}/>
                <p className="mt-small">{item.desc}</p>
            </div>
        ));
    
    return (
        
        
        <div className="services__laptop-content">
                            
        <div className="services__id-num"><h1>{number}</h1></div> 
            <div className="services__id-laptop-content">
                <h2>{name}</h2>
                <p className="mt-medium">{description}</p>
                <div className="services__id-laptop-cards mt-medium">
                    {features}
                </div>
            </div>
            <BackButton onClick={() => clickLeft()} className="services__id-laptop-left" />
            <ForwardButton onClick={() => clickRight()} className="services__id-laptop-right" />
        </div>                    
    );
};


class Services extends Component {
    constructor(props) {
    super(props);
    this.state = {
        appear: true,
        service: data.services[0],
        XValue1: 0
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
    
    handleTouchStart = (event) => {
        this.setState({ XValue1: event.changedTouches[0].screenX});
    }

    handleTouchEnd = (event) => {
    if(event.changedTouches[0].screenX > this.state.XValue1 && event.changedTouches[0].screenX - this.state.XValue1 > 50) {
            this.prevService();
        } else if (event.changedTouches[0].screenX < this.state.XValue1 && this.state.XValue1 - event.changedTouches[0].screenX > 50){
            this.nextService();
        }
    }
    
    render(){
        const {id, number, name, description, cards} = this.state.service;
        
        return (
        
        <div className="services">    
        
            <Media queries={{ small: "(max-width: 750px)" }}>
                {matches =>
                    matches.small ? (    
                    <div onTouchStart={this.handleTouchStart} onTouchEnd={this.handleTouchEnd}  className="services__mobile"> 
                        <div className="services__mobile-header">
                            <LeftBtn onClick={() => this.prevService()} style={{cursor: "pointer"}} />
                            <h4>03. What can I do</h4>
                            <RightBtn onClick={() => this.nextService()} style={{cursor: "pointer"}} />
                        </div>
                        
                        <CSSTransition
                            in={this.state.service}
                            appear={false}
                            timeout={800}
                            classNames="fade"
                        >
                        
                        <Service id={id} number={number} name={name} description={description} cards={cards} />
                        
                        </CSSTransition>
                    
                    </div>
                    
                    ) : (
                    
                    <div className="services__laptop">
                        <div className="services__laptop-title">
                                <h4>03. What can I do </h4>
                        </div>
                        
                            <TransitionGroup>
                            <CSSTransition
                                key={id}
                                timeout={800}
                                classNames="service"
                            >
                            
                        <ServiceLaptop id={id} number={number} name={name} description={description} cards={cards} clickLeft={this.prevService} clickRight={this.nextService} />
                        
                        </CSSTransition>
                        </TransitionGroup>
                    </div>
            
                    )
                }
            </Media>
        </div>    
        );
    }
}

export default Services;