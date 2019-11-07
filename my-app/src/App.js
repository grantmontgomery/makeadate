import React, { Component } from 'react';
import {NavBar} from "./components"
import {Header} from "./components"
import {EventsVenues} from "./components"
import {Footer} from './components';
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
              <EventsVenues></EventsVenues>
              <Footer></Footer>
                </div>
                
                
                


         );
    }
}
 
export default App;