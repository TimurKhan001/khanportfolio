import React, {Component} from 'react';
import Media from 'react-media'; 
import "./About.css";
import data from "./data/data";
import useWindowDimensions from "./WindowDimension.js";

const AboutContent = ({skills}) => {
    
    const { height } = useWindowDimensions();
    
    const myskills = skills.map((item) => (
            <div className="about__mobile-skill" 
                key={item.id}
                style={{padding: ".5rem 2rem", width: item.value}}
                >
                <p>{item.name}</p>
            </div>    
        ));
    
    return (
        <div style={{height: height - 162}} className="about__mobile-content">
                <p>I'm a freelance Web developer. I have a keen eye for detail and a pride in producing outstanding websites and services for clients around the world.</p>
                <div className="about__mobile-skills">
                <p className="mt-medium" style={{fontWeight: 'bold'}}>Skills: </p>  
            {myskills}
        </div>
                       
        </div>
    );
}


class About extends Component {
    constructor(props) {
    super(props);
    this.state = {
        skills: data.skills_default
        };
    }
    
    componentDidMount = () => {
        setTimeout(() => {
            this.setState({skills: data.skills});
        }, 500);
    }
    
    render(){
        const skills = this.state.skills;
        
        const myskills = skills.map((item) => (
            <div className="about__laptop-skill" 
                key={item.id}
                style={{width: item.value}}
                >
                <p>{item.name}</p>
            </div>    
        ));
    
        return (
        
        <div className="about">    
        
            <Media queries={{ small: "(max-width: 750px)" }}>
                {matches =>
                    matches.small ? (    
                    <div className="about__mobile"> 
                        
                        <div className="about__mobile-header">
                            <h4>04. The tools I use</h4>
                        </div>
                        
                       <AboutContent skills={skills} />
                       
                        
                    </div>
                    
                    ) : (
                    
                    <div className="about__laptop">
                        <div className="about__laptop-title">
                            <h4>04. The tools I use </h4>
                        </div>    
                        
                        <div className="about__laptop-content"> 
                            <div className="about__laptop-text mt-big">
                             <p>I'm a freelance Web developer. I have a keen eye for detail and a pride in producing outstanding websites and services for clients around the world.</p>
                             <div className="about__laptop-skills">
                             <p className="mt-medium" style={{fontWeight: 'bold'}}>Skills: </p>  
                             {myskills}
                        </div>
                        </div>
                        </div>
                    
                    </div>    
                    )
                }
            </Media>
        </div>    
        );
    }
}

export default About;