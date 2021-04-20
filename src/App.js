import React, {Component} from "react";
import Media from 'react-media';
import Container from "./Container";
import Div100vh from 'react-div-100vh';
import LoadingScreen from 'react-loading-screen';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       isLoading: true 
    };  
  }
  
  componentDidMount() {
    setTimeout(() => {this.setState({isLoading: false});
    },2000);
}
  
  render() {
    
  return (
  
  this.state.isLoading ?
  
  <LoadingScreen
    loading={true}
    bgColor='#f1f1f1'
    spinnerColor='#386bed'
    textColor='#676767'
    text='Loading'
  > 
  
  </LoadingScreen>
  
  : 
  
  <Media queries={{ small: "(max-width: 599px)" }}>
  
      {matches =>
        matches.small ? (  
    
        <Div100vh className="App fade-in">
          <Container />
        </Div100vh>
    
      ) : ( 
    
        <div className="App fade-in">
          <Container />
        </div>
      )
    }
    
  </Media>
  );
}
}
export default App;
