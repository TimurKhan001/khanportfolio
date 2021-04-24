import React, {Component} from "react";
import {NavLink} from 'react-router-dom';
import SwitchMainContent from "./SwitchMainContent";
import {ReactComponent as Logo} from './img/logo.svg';
import Div100vh from 'react-div-100vh';

class Container extends Component {
    constructor(props) {
    super(props);

    this.inputRef = React.createRef();
    // this.inputRef.current is null here
    this.backRef = React.createRef();
  }
  
    handleChange = (e) => {
        if (e.target.checked) {
            document.body.classList.remove("unblocked");
            document.body.classList.add("blocked");
            window.scrollTo(0, 0); 
        } else {
            document.body.classList.remove("blocked");
            document.body.classList.add("unblocked");
        }
    }
    
    handleClick = (e) => {
    // we can use this.inputRef.current to access DOM element
    this.inputRef.current.checked = false;
    this.handleChange(e);
  };
  
    render() {
        
        const active = {textDecoration: 'underline', cursor: 'pointer'};
        
        return(
            <div className="container">
                
                <div className="nav-laptop">
                
                    <Logo className="nav-laptop__logo" />
                    
                    <nav className="nav-laptop__links">
                        <NavLink exact to="/" className="nav-laptop__link" activeClassName="nav-laptop__link-active">
                        01. Home
                        </NavLink> 
                        
                        <NavLink exact to="/portfolio" className="nav-laptop__link" activeClassName="nav-laptop__link-active">
                        02. Portfolio
                        </NavLink> 
                        
                        <NavLink exact to="/services" className="nav-laptop__link" activeClassName="nav-laptop__link-active">
                        03. Services
                        </NavLink>
                        
                        <NavLink exact to="/about" className="nav-laptop__link" activeClassName="nav-laptop__link-active">
                        04. About
                        </NavLink>
                        
                        <NavLink exact to="/contact" className="nav-laptop__link" activeClassName="nav-laptop__link-active">
                        05. Contact
                        </NavLink>
                    </nav>
                </div>
                
                <div className="nav-mobile">
                
                    <img className="navigation__logo" src="logo.png" alt="logo"/>
                    
                    <input onChange={this.handleChange} type="checkbox" ref={this.inputRef} className="navigation__checkbox" id="navi-toggle"/>
                        <label for="navi-toggle" className="navigation__button"><span class="navigation__icon">&nbsp;</span></label>

                        <div ref={this.backRef} className="navigation__background">&nbsp;</div>

                        <Div100vh className="navigation__nav">
                            <ul className="navigation__list">
                                <li className="navigation__item"><NavLink onClick={this.handleClick} exact className="navigation__link" activeStyle={active} to="/">01. Home</NavLink></li>
                                <li className="navigation__item"><NavLink onClick={this.handleClick} exact className="navigation__link" activeStyle={active} to="/portfolio">02. Portfolio</NavLink></li>
                                <li className="navigation__item"><NavLink onClick={this.handleClick} exact className="navigation__link" activeStyle={active} to="/services">03. Services</NavLink></li>
                                <li className="navigation__item"><NavLink onClick={this.handleClick} exact className="navigation__link" activeStyle={active} to="/about">04. About</NavLink></li>
                                <li className="navigation__item"><NavLink onClick={this.handleClick} exact className="navigation__link" activeStyle={active} to="/contact">05. Contact</NavLink></li>
                             </ul>
                             <div className="navigation__hire-me"><a href="/contact">Hire me</a></div>
                        </Div100vh>
                </div>
                
                <div className="landscape-mobile"><h2 className="mt-big">Please turn me back to portrait mode</h2></div>
                
                <div className="main_content">
                    
                    <SwitchMainContent />
                    
                </div>
            </div>
        );
    }
}

export default Container; 

