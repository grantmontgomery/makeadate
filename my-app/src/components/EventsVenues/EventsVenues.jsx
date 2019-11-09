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
    addEvent(event){
        console.log(event.target)
    }
    addVenue(event){
        console.log(event.target)
    }
    render() { 
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