import React, { Component } from 'react';
import {AppContext} from "./AppContext"
import {NavBar} from "./components"
import {Header} from "./components"
import {EventsVenues} from "./components"
import {Footer} from './components';
import "./index.css"




class App extends Component {
    constructor(props){
        super(props)
        this.state={
            lat: null,
            long: null,
            errorMessage: ""
        }
    }
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude,
            long: position.coords.longitude}),
            error => this.setState({errorMessage: error.message})
        )
    }


    styles = {
        backgroundImage: "url('./components/pictures/coupleondate4.jpg')",
        bacgkroundSize: '100% auto'
    }
    render() { 
        console.log(this.state)
        return (
            <AppContext.Provider value={this.state}>
                   <div className="background_image" ref={this.backgroundRef}>
                <NavBar>
                </NavBar>

                <Header>
                    
                </Header>
              <EventsVenues></EventsVenues>
              <Footer></Footer>
                </div>
            </AppContext.Provider>

         );
    }
}
 
export default App;