import React, { Component } from 'react';
import {Scheduler} from "../Scheduler"
import {SuggestedEvents} from "../SuggestedEvents"
import {SuggestedVenues} from "../SuggestedVenues"
import "./EventsVenues.css"

class EventsVenues extends Component {
    constructor(props){
        super(props)

    }
    addPart = function(event){
        console.log(event.targe.value)
    }
    render() { 
        return ( 
            <div className="eventsvenues-box">
                Event Venues
                <Scheduler addPart={this.addPart}></Scheduler>
                <SuggestedEvents addPart={this.addPart}></SuggestedEvents>
                <SuggestedVenues addPart={this.addPart}></SuggestedVenues>
            </div>
          
        )
    }
}
 
export default EventsVenues;