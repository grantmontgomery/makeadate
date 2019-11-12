import React, { Component } from 'react';
import "./Event.css"
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
                    <button onClick={() => value.add_remove(this.state)}>
                        +
                    </button>
                </div>

                }
            </EventsVenuesContext.Consumer>
            
         );
    }
}
 
export default Event;