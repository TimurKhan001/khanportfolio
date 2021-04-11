import React, {Component} from 'react';
import "./Portfolio.css";
import data from "./data/data";
import Project from "./Project";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {ReactComponent as LeftBtn} from './img/arrowhead-left-outline.svg';
import {ReactComponent as RightBtn} from './img/arrowhead-right-outline.svg';

class Portfolio extends Component {
    constructor(props) {
    super(props);
    this.state = {
        appear: true,
        project: data.projects[0]
    };
  }
  
    nextProperty = () => {
      let change = Object.assign({}, this.state);
      let index = data.projects.indexOf(change.project);
      index++;
      if (index === data.projects.length) {
        index = 0;
      }
      change.project = data.projects[index];
      this.setState(change);
    }
    
    prevProperty = () => {
      let change = Object.assign({}, this.state);
      let index = data.projects.indexOf(change.project);
      index--;
      if(index < 0) {
        index = data.projects.length - 1;
      }
      change.project = data.projects[index];
      this.setState(change);
    }
  
    render(){
        const {id, route, name, small_description, image} = this.state.project;
        const number = data.projects.length;
        const appear = this.state.appear;
        return (
            <div className="portfolio">
                <div className="portfolio__header">
                    <h4>02. Some things I've built</h4>
                </div> 
                
                <div className="portfolio__content">
     
                    <CSSTransition
                    in={appear}
                    appear={false}
                    timeout={1000}
                    classNames="fade">
                    
                    <Project id={id} route={route} name={name} small_description={small_description} image={image} />
                    
                    </CSSTransition>

                </div>
                
                <div className="portfolio__content-nav">
                        <LeftBtn onClick={() => this.prevProperty()} style={{cursor: "pointer"}} />
                        <h4 className="portfolio__content-nav-counter">{id} of {number} </h4>
                        <RightBtn onClick={() => this.nextProperty()} style={{cursor: "pointer"}} />
                </div>
            </div>
            

        );
    }
}

export default Portfolio;