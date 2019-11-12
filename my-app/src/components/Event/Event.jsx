import React, { Component } from 'react';
import "./Event.css"
import { type } from 'os';
import { EventsVenuesContext } from '../EventsVenues/Context';

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

    // addOrRemove = () => {
    //     if(this.addEvent){
    //         addevent(this.state){
                
    //     }
    // }

    render() { 
        const {city, time, name, type, price} = this.state
        return ( 
            <EventsVenuesContext.Consumer>
                {value =>
                    <div  className="event">
                    <ul>
                    <li>{name}</li>
                    <li>{city}</li>
                    <li>{time}</li>
                    <li>{type}</li>
                    <li>{price}</li>
                    </ul>
                    <br/>
                    <button onClick={() => value.addEvent(this.state)}>
                        +
                    </button>
                    <button onClick={() => value.removePart(name)}>
                        -
                    </button>
                </div>

                }
            </EventsVenuesContext.Consumer>
            
         );
    }
}
 
export default Event;