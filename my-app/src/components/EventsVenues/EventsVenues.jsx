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
        return ( 
            <div className="eventsvenues-box">
                Event Venues
                <Scheduler dateParts={this.state.dateParts}></Scheduler>
                <SuggestedEvents addEvent={this.addEvent} removePart={this.removePart}></SuggestedEvents>
                <SuggestedVenues addVenue={this.addVenue} removePart={this.removePart}></SuggestedVenues>
            </div>
          
        )
    }
}
 
export default EventsVenues;