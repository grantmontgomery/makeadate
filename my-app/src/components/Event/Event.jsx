import React, { Component } from 'react';
import "./Event.css"

class Event extends Component {
    constructor(props){
        super(props)
        console.log(this.props)
    }
    render() { 
        const {city, time, title} = this.props
        return ( 
            <div  className="event">
                <ul>
                <li>{title}</li>
                <li>{city}</li>
                <li>{time}</li>
                </ul>
            </div>
         );
    }
}
 
export default Event;