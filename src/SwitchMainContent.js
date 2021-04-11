import React from 'react';
import {
    Switch, Route
} from 'react-router-dom';
import Home from './Home';
import Portfolio from './Portfolio';

const Services = () => (<div className="services"><h2>Services</h2></div>);
const About = () => (<div className="about"><h2>About</h2></div>);
const Contact = () => (<div className="contact"><h2>Contact</h2></div>);

const SwitchMainContent = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/services" component={Services} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
    </Switch>
    );
    
export default SwitchMainContent;