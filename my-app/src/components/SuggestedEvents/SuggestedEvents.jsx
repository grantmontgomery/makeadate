import React, { Component } from 'react';
import {Event} from "../Event"
import "./SuggestedEvents.css"


class SuggestedEvents extends Component {
    constructor(props){
        super(props)
        this.state = {
            events: [
                {
            id: 1,
            type: "event",
            title: "Concert in the park",
            city: "Los Angeles",
            time: "12:00",
            addEvent: this.props.addEvent
        }

            ]
        }
    }
    render() { 
        const {events} = this.state
        return (
            <div className="suggested-events">
                Suggested Events
                {events.map(event =>{
                    const{title, city, time, id, type, addEvent} = event
                    return (
                    <Event key={id} id={id} type={type} title={title} city={city} time={time} addEvent={addEvent}>

                    </Event>
                    )
                })}
            </div>
          );
    }
}
 
export default SuggestedEvents;