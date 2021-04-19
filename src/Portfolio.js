import React, {Component} from 'react';
import Media from 'react-media';
import "./Portfolio.css";
import data from "./data/data";
import Project from "./Project";
import {CSSTransition} from 'react-transition-group';
import {ReactComponent as LeftBtn} from './img/arrowhead-left-outline_1.svg';
import {ReactComponent as RightBtn} from './img/arrowhead-right-outline_1.svg';
import SwitchProjects from "./SwitchProjects";
import {Link, useRouteMatch} from 'react-router-dom';
import { Swipeable } from 'react-touch';


const ProjectLaptop = ({ route, image, name}) => {
    
    let { url } = useRouteMatch();
    
        return (
            <Link to={`${url}/${route}`} className="portfolio__laptop-project">
                    
                <img src={image} alt="project_id" />
                <h4>{name}</h4>
                
            </Link>
    );
};

class Portfolio extends Component {
    constructor(props) {
    super(props);
    this.state = {
        appear: true,
        project: data.projects[0],
        projects: data.projects,
        XValue1: 0,
    };
    
    this.divRef = React.createRef();
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
    
    handleTouchStart = (event) => {
        this.setState({ XValue1: event.changedTouches[0].screenX});
    }

    handleTouchEnd = (event) => {
    if(event.changedTouches[0].screenX > this.state.XValue1 && event.changedTouches[0].screenX - this.state.XValue1 > 50) {
            this.prevProperty();
        } else if (event.changedTouches[0].screenX < this.state.XValue1 && this.state.XValue1 - event.changedTouches[0].screenX > 50){
            this.nextProperty();
        }
    }
    
    render(){
        
        const appear = this.state.appear;
        
        const onWheel = (e) => {
            const container = this.divRef.current;
            const containerScrollPosition = this.divRef.current.scrollLeft;
            container.scrollTo({
            top: 0,
            left: containerScrollPosition + e.deltaY,
            });
            };
        
        const {id, route, name, small_description, image} = this.state.project;

            const projects = this.state.projects.map((item, index) => (
                
                <ProjectLaptop key={index} route={item.route} image={item.image} name={item.name} />
               
                ));
        
        let first;
        let second;
                
        const func1 = ((event) => {
            console.log("move", event.changedTouches[0].screenX);
            first = event.changedTouches[0].screenX;
            console.log(first);
        });
        
       
        
        const func2 = ((event) => {
            console.log("move", event.changedTouches[0].screenX);
        });
        
        return (
            
        <div className="portfolio">
                
            <Media queries={{ small: "(max-width: 599px)" }}>
                {matches =>
                    matches.small ? (
                        <div onTouchStart={this.handleTouchStart} onTouchEnd={this.handleTouchEnd} className="portfolio__mobile">              
                            <div className="project__id">
                                <SwitchProjects />  
                            </div>
                            <div className="portfolio__mobile-header">
                                <LeftBtn onClick={() => this.prevProperty()} style={{cursor: "pointer"}} />
                                <h4>02. Some things I've built</h4>
                                <RightBtn onClick={() => this.nextProperty()} style={{cursor: "pointer"}} />
                            </div> 
                            
                              
                            <CSSTransition
                                in={appear}
                                appear={false}
                                timeout={800}
                                classNames="fade"
                            >
                                <Project id={id} route={route} name={name} small_description={small_description} image={image}/>
                            </CSSTransition>
    
                        </div>
                    ) : (
                        <div className="portfolio__laptop">
                            <div className="project__id">
                                <SwitchProjects />  
                            </div>
                            
                            <div className="portfolio__laptop-title">
                                <h4>02. Some thing I've built</h4>
                            </div>
                            <div ref={this.divRef}
                                onWheel={onWheel}
                                className="portfolio__laptop-content"
                            >
                                {projects}

                            </div>
                        </div>
                    )
                }
            </Media>
        </div>
        );
    }
}

export default Portfolio;

