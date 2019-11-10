import React, { Component } from 'react';
import {Event} from "../Event"
import "./SuggestedEvents.css"
import { freemem } from 'os';


class SuggestedEvents extends Component {
    constructor(props){
        super(props)
        this.state = {
            events: [
            {id: 1,
            type: "event",
            name: "Concert in the park",
            city: "Los Angeles",
            time: "12:00",
            price: "free",
            addEvent: this.props.addEvent,
            removePart: this.props.removePart},
            {id: 2,
            type: "event",
            name: "Japanese sushi festival",
            city: "Los Angeles",
            time: "8:00 p.m",
            price: "$30",
            addEvent: this.props.addEvent,
            removePart: this.props.removePart}
            ]
        }
    }
    render() { 
        const {events} = this.state
        return (
            <div className="suggested-events">
                Suggested Events
                {events.map(event =>{
                    const{name, city, time, id, type, price, removePart, addEvent} = event
                    return (
                    <Event key={id} id={id} type={type} name={name} city={city} time={time} price={price} removePart={removePart} addEvent={addEvent}>

                    </Event>
                    )
                })}
            </div>
          );
    }
}
 
export default SuggestedEvents;