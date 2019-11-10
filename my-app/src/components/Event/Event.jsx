import React, { Component } from 'react';
import "./Event.css"
import { type } from 'os';

class Event extends Component {
    constructor(props){
        super(props)
        this.state={
            city: this.props.city,
            time: this.props.time,
            name: this.props.name,
            type: this.props.type,
            price: this.props.price
        }
    }
    render() { 
        const {city, time, name, type, price} = this.state
        const {addEvent} = this.props
        const {removePart} = this.props
        return ( 
            <div  className="event">
                <ul>
                <li>{name}</li>
                <li>{city}</li>
                <li>{time}</li>
                <li>{type}</li>
                <li>{price}</li>
                </ul>
                <br/>
                <button onClick={() => addEvent(this.state)}>
                    +
                </button>
                <button onClick={() => removePart(name)}>
                    -
                </button>
            </div>
         );
    }
}
 
export default Event;