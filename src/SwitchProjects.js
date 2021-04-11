import React from 'react';
import {
    Switch, Route
} from 'react-router-dom';
import { withRouter } from 'react-router-dom'

const EndlessWinter = ({ history }) => (
    <div className="project__id-content">
    <h2>Endless</h2>
    <button onClick={() => history.goBack()}>BACK</button>
    </div>);

const KhanProject = ({ history }) => (
    <div className="project__id-content">
    <h2>KhanProject</h2>
     <button onClick={() => history.goBack()}>BACK</button>
    </div>);



const Kamchatka = () => (<div className="project__id-content"><h2>Kamchatka</h2></div>);
const Unic = () => (<div className="project__id-content"><h2>Unic</h2></div>);
const Crypto = () => (<div className="project__id-content"><h2>Crypto</h2></div>);
const Reali = () => (<div className="project__id-content"><h2>Reali</h2></div>);
const Trillo = () => (<div className="project__id-content"><h2>Trillo</h2></div>);
const Todo = () => (<div className="project__id-content"><h2>Todo</h2></div>);

const SwitchProjects = () => (
    <Switch>
        <Route path="/portfolio/endless_winter_project" component={EndlessWinter} />
        <Route path="/portfolio/khanproject" component={KhanProject} />
        <Route path="/portfolio/kamchatka_tours" component={Kamchatka} />
        <Route path="/portfolio/unic_twitter_clone" component={Unic} />
        <Route path="/portfolio/crypto_web" component={Crypto} />
        <Route path="/portfolio/reali_landing" component={Reali} />
        <Route path="/portfolio/trillo_page" component={Trillo} />
        <Route path="/portfolio/todo_lis" component={Todo} />
    </Switch>
    );
    
export default SwitchProjects;