import React, { Component } from 'react';
import {Scheduler} from "../Scheduler"
import {SuggestedEvents} from "../SuggestedEvents"
import {SuggestedVenues} from "../SuggestedVenues"
import "./EventsVenues.css"

class EventsVenues extends Component {
    constructor(props){
        super(props)
        this.state={
            dateParts: []
        }

    }

    addEvent = (eventState) => {
        this.setState({
            dateParts: [...this.state.dateParts, eventState]
        })
    }

    addVenue = (venueState) => {
        this.setState({
            dateParts: [...this.state.dateParts, venueState]
        })
    
    }

    removePart = (name) => {
        this.setState({
            dateParts: this.state.dateParts.filter(part => part.name !== name)
        })
    }


    render() { 
        const {Provider, Consumer} = React.createContext()
        return ( 
            <div className="eventsvenues-box">
                <Provider value={this.state.dateParts}>
                <Scheduler></Scheduler>
                <SuggestedEvents></SuggestedEvents>
                <SuggestedVenues></SuggestedVenues>
                </Provider>
            </div>
          
        )
    }
}
 
export default EventsVenues;