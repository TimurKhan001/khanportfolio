import React, {Component} from 'react';
import Media from 'react-media'; 
import "./About.css";
import data from "./data/data";


class About extends Component {
    constructor(props) {
    super(props);
    this.state = {
        skills: data.skills
        };
    }
    
    componentDidMount() {
        console.log(this.state.skills[1].value);
    }
    
    render(){
        const myskills = this.state.skills.map((item) => (
            <div className="about__mobile-skill mt-small" 
                key={item.id}
                style={{padding: ".5rem 2rem", width: item.value}}
                >
                <p>{item.name}</p>
            </div>    
        ))
        
    
        return (
        
        <div className="about">    
        
            <Media queries={{ small: "(max-width: 599px)" }}>
                {matches =>
                    matches.small ? (    
                    <div className="about__mobile"> 
                        
                        <div className="about__mobile-header">
                            <h4>04. About</h4>
                        </div>
                        
                        <div className="about__mobile-content">
                            <p>I'm a freelance Web developer. I have a keen eye for detail and a pride in producing outstanding websites and services for clients around the world.</p>
                         <div className="about__mobile-skills">
                            <p className="mt-medium" style={{fontWeight: 'bold'}}>Skills: </p>  
                            {myskills}
                        </div>
                       
                        </div>
                       
                        
                    </div>
                    
                    ) : (
                    
                    <div></div>
                    )
                }
            </Media>
        </div>    
        );
    }
}

export default About;