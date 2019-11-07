import React, { Component } from 'react';
import {Scheduler} from "../Scheduler"
import {SuggestedEvents} from "../SuggestedEvents"
import {SuggestedVenues} from "../SuggestedVenues"
import "./EventsVenues.css"

class EventsVenues extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="eventsvenues-box">
                Event Venues
                <Scheduler></Scheduler>
                <SuggestedEvents></SuggestedEvents>
                <SuggestedVenues></SuggestedVenues>
            </div>
          
        )
    }
}
 
export default EventsVenues;