import React, { Component } from 'react';
import "./Event.css"

class Event extends Component {
    constructor(props){
        super(props)
        console.log(this.props)
    }
    render() { 
        const {city, time, title, addPart} = this.props
        return ( 
            <div  className="event">
                <ul>
                <li>{title}</li>
                <li>{city}</li>
                <li>{time}</li>
                </ul>
                <br/>
                <button onClick={event => this.addPart(event)}>
                    +
                </button>
            </div>
         );
    }
}
 
export default Event;