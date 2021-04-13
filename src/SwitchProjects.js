import React from 'react';
import {
    Switch, Route
} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import EndlessWinter from "./projects/EndlessWinter";
import KhanProject from "./projects/Khanproject";
import Kamchatka from "./projects/Kamchatka";
import Unic from "./projects/Unic";
import Crypto from "./projects/Crypto";
import Reali from "./projects/Reali";
import Trillo from "./projects/Trillo";
import Todo from "./projects/Todo";

const SwitchProjects = () => (
    
    <Route render={({location}) => (
    
        <TransitionGroup className="transition-projects">
            <CSSTransition
            key={location.key}
            timeout={1200}
            classNames="drop"
            >
        
        <Switch location={location}>
            <Route path="/portfolio/endless_winter_project" component={EndlessWinter} />
            <Route path="/portfolio/khanproject" component={KhanProject}  />
            <Route path="/portfolio/kamchatka_tours" component={Kamchatka} />
            <Route path="/portfolio/unic_twitter_clone" component={Unic} />
            <Route path="/portfolio/crypto_web" component={Crypto} />
            <Route path="/portfolio/reali_landing" component={Reali} />
            <Route path="/portfolio/trillo_page" component={Trillo} />
            <Route path="/portfolio/todo_list" component={Todo} />
        </Switch>
    
        </CSSTransition>
        </TransitionGroup>
    
    )} />
    
);
    
export default SwitchProjects;