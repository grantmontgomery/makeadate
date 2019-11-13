import React, { Component } from 'react';
import {AppContext} from "./AppContext"
import {NavBar} from "./components"
import {Header} from "./components"
import {EventsVenues} from "./components"
import {Footer} from './components';
import "./index.css"
require("dotenv").config()



class App extends Component {
    constructor(props){
        super(props)
        this.state={
            errorMessage: "",
            city:""
        }
    }


    OpenCage = (lat, long) => {
        const coords = `${lat}%2C+${long}`
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${coords}&key=${process.env.REACT_APP_OPENCAGE_API_KEY}`)
        .then(response => response.json())
        .then(data => this.setState({city: data.results[0].components.city}))
        .catch(error => console.log(error.message))
        
    }
    

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.OpenCage(position.coords.latitude, position.coords.longitude),
            error => this.setState({errorMessage: error.message})
        ) 
    }


    styles = {
        backgroundImage: "url('./components/pictures/coupleondate4.jpg')",
        bacgkroundSize: '100% auto'
    }
    render() { 
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