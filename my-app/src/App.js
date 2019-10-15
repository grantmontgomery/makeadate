import React, { Component } from 'react';
import NavBar from './components/NavBar';
// import Footer from './components/Footer';
import Header from "./components/Header"


class App extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                
                <NavBar>
                </NavBar>

                <Header>
                    
                </Header>
                
                
                <h1>Hello World!</h1>

{/*                 
                <Footer>
                </Footer> */}

            </React.Fragment> 
         );
    }
}
 
export default App;