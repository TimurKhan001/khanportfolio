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
        projects: data.projects
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
    

    render(){
        
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
        
        return (
            
        <div className="portfolio">
                
            <Media queries={{ small: "(max-width: 599px)" }}>
                {matches =>
                    matches.small ? (
                        <div className="portfolio__mobile">              
                            <div className="project__id">
                                <SwitchProjects />  
                            </div>
                            <div className="portfolio__mobile-header">
                                <LeftBtn onClick={() => this.prevProperty()} style={{cursor: "pointer"}} />
                                <h4>02. Some things I've built</h4>
                                <RightBtn onClick={() => this.nextProperty()} style={{cursor: "pointer"}} />
                            </div> 
                               
                                <Project id={id} route={route} name={name} small_description={small_description} image={image}/>
                            
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

