import React, { Component } from 'react';
import "./Event.css"
import { type } from 'os';

class Event extends Component {
    constructor(props){
        super(props)
    }
    render() { 
        const {city, time, title, type, addEvent} = this.props
        return ( 
            <div  className="event">
                <ul>
                <li>{title}</li>
                <li>{city}</li>
                <li>{time}</li>
                <li>{type}</li>
                </ul>
                <br/>
                <button onClick={event => addEvent(event)}>
                    +
                </button>
            </div>
         );
    }
}
 
export default Event;