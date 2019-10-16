import React, { Component } from 'react';
import NavBar from './components/NavBar';
// import Footer from './components/Footer';
import Header from "./components/Header"
import ""


class App extends Component {
    state = {  }
    styles = {
        backgroundImage: "url('./components/pictures/coupleondate4.jpg')",
        bacgkroundSize: '100% auto'
    }
    render() { 
        return (
            <React.Fragment>
                <div style={this.styles}>
                <NavBar>
                </NavBar>

                <Header>
                    
                </Header>
                </div>
                
                
                
                <h1>Hello World!</h1>

{/*                 
                <Footer>
                </Footer> */}

            </React.Fragment> 
         );
    }
}
 
export default App;