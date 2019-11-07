import React, { Component } from 'react';
import {Scheduler} from "../Scheduler"
import "./EventsVenues.css"

class EventsVenues extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="eventsvenues-box">
                Event Venues
                <Scheduler></Scheduler>
            </div>
          
        )
    }
}
 
export default EventsVenues;