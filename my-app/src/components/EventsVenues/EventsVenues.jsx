import React, { Component } from 'react';
import {Scheduler} from "../Scheduler"
import {SuggestedEvents} from "../SuggestedEvents"
import {SuggestedVenues} from "../SuggestedVenues"
import {EventsVenuesContext} from "./Context.jsx"
import "./EventsVenues.css"



class EventsVenues extends Component {
    constructor(props){
        super(props)
        this.state={
            dateParts: [],
            addPart: this.addPart,
            removePart: this.removePart
        }
    }

    addPart = (part) => {
        this.setState({
            dateParts: [...this.state.dateParts, part]
        }) 
    
    }

    removePart = (name) => {
        this.setState({
            dateParts: this.state.dateParts.filter(part => part.name !== name)
        })
    }

    render() { 
        console.log(this.state.dateParts)
        return ( 
            <EventsVenuesContext.Provider value={this.state}>
            <div className="eventsvenues-box">
                <Scheduler dateParts={this.state.dateParts}></Scheduler>
                <SuggestedEvents></SuggestedEvents>
                <SuggestedVenues></SuggestedVenues>
            </div>
            </EventsVenuesContext.Provider>
          
        )
    }
}

export default EventsVenues;