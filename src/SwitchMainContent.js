import React from 'react';
import Media from 'react-media';
import {
    Switch, Route
} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import Home from './Home';
import Portfolio from './Portfolio';

const Services = () => (<div className="services"><h2>Services</h2></div>);
const About = () => (<div className="about"><h2>About</h2></div>);
const Contact = () => (<div className="contact"><h2>Contact</h2></div>);

const SwitchMainContent = () => (
    
    <Media queries={{ small: "(max-width: 599px)" }}>
        {matches =>
            matches.small ? (    
    
            
    
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/services" component={Services} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </Switch>
    
      
        
            ) : ( 
            
        <Route render={({location}) => (
    
        <TransitionGroup className="transition">
            <CSSTransition
            key={location.key}
            timeout={1000}
            classNames="move"
            >
    
        <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/services" component={Services} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </Switch>
    
        </CSSTransition>
        </TransitionGroup>
        
       )} />
            
             )
        }
    </Media>
    
)
    
export default SwitchMainContent;