import React, { Component } from 'react';
import NavBar from './components/NavBar';
// import Footer from './components/Footer';
import Header from "./components/Header"
import "./index.css"



class App extends Component {
    state = {  }
    styles = {
        backgroundImage: "url('./components/pictures/coupleondate4.jpg')",
        bacgkroundSize: '100% auto'
    }
    render() { 
        return (
                <div className="background_image">
                <NavBar>
                </NavBar>

                <Header>
                    
                </Header>
                </div>
                
                
                


         );
    }
}
 
export default App;