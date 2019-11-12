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
            add_remove: this.add_remove
            // addEvent: this.addEvent,
            // addVenue: this.addVenue,
            // removePart: this.removePart
        }
    }

    // addEvent = (eventState) => {
    //     this.setState({
    //         dateParts: [...this.state.dateParts, eventState]
    //     })
    // }

    // addVenue = (venueState) => {
    //     this.setState({
    //         dateParts: [...this.state.dateParts, venueState]
    //     }) 
    
    // }

    // removePart = (name) => {
    //     this.setState({
    //         dateParts: this.state.dateParts.filter(part => part.name !== name)
    //     })
    // }
    
    add_remove = (partstate) => {
        if(this.state.dateParts.includes(partstate) === false){
            this.setState({dateParts: [...this.state.dateParts, partstate]})
        }
        else{
            this.setState({dateParts: this.state.dateParts.filter(part => part !== partstate)})
        }
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