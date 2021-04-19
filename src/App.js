import React from "react";
import Media from 'react-media';
import Container from "./Container";
import Div100vh from 'react-div-100vh';

function App() {
  return (
  
  <Media queries={{ small: "(max-width: 599px)" }}>
  
      {matches =>
        matches.small ? (  
    
        <Div100vh className="App">
          <Container />
        </Div100vh>
    
      ) : ( 
    
        <div className="App">
          <Container />
        </div>
      )
    }
    
  </Media>
  );
}

export default App;
