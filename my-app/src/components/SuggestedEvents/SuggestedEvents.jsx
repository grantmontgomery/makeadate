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
            title: "Concert in the park",
            city: "Los Angeles",
            time: "12:00"
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
                    const{title, city, time, id} = event
                    return (
                    <Event key={id} id={id} title={title} city={city} time={time}>

                    </Event>
                    )
                })}
            </div>
          );
    }
}
 
export default SuggestedEvents;