import React, { Component } from 'react';
import {NavBar} from "./components"
import {Header} from "./components"
import {EventsVenues} from "./components"
import {Footer} from './components';
import "./index.css"




class App extends Component {
    constructor(props){
        super(props)
        this.backgroundRef = React.createRef()
        this.state = {backgroundsize: 0}
    }
    componentDidMount(){
        this.backgroundRef.current.addEventListener("load", this.giveClientHeight())
        console.log(this.backgroundRef)
    }

    giveClientHeight = () => {
        console.log(this.backgroundRef.current.ClientHeight)
    }

    styles = {
        backgroundImage: "url('./components/pictures/coupleondate4.jpg')",
        bacgkroundSize: '100% auto'
    }
    render() { 
        return (
                <div className="background_image" ref={this.backgroundRef}>
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