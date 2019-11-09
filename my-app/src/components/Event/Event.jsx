import React, { Component } from 'react';
import "./Event.css"
import { type } from 'os';

class Event extends Component {
    constructor(props){
        super(props)
        this.state={
            city: this.props.city,
            time: this.props.time,
            title: this.props.title,
            type: this.props.type
        }
    }
    render() { 
        const {city, time, title, type} = this.state
        const {addEvent} = this.props
        return ( 
            <div  className="event">
                <ul>
                <li>{title}</li>
                <li>{city}</li>
                <li>{time}</li>
                <li>{type}</li>
                </ul>
                <br/>
                <button onClick={() => addEvent(this.state)}>
                    +
                </button>
            </div>
         );
    }
}
 
export default Event;