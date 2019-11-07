import React, { Component } from 'react';
import {NavBar} from "./components"
import {Header} from "./components"
// import Footer from './components/Footer';
import "./index.css"
import {EventsVenues} from "./components"



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
              <EventsVenues></EventsVenues>
                </div>
                
                
                


         );
    }
}
 
export default App;