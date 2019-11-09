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
    addEvent(eventState){
        console.log(eventState)
    }
    addVenue(venueState){
        this.setState({
            dateParts: [...this.state.dateParts, venueState]
        })
        console.log(this.state.dateParts)
    }
    render() { 
        console.log(this.state.dateParts)
        return ( 
            <div className="eventsvenues-box">
                Event Venues
                <Scheduler dateParts={this.state.dateParts}></Scheduler>
                <SuggestedEvents addEvent={this.addEvent}></SuggestedEvents>
                <SuggestedVenues addVenue={this.addVenue}></SuggestedVenues>
            </div>
          
        )
    }
}
 
export default EventsVenues;