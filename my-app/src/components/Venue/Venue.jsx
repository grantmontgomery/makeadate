import React, { Component } from 'react';
import "./Venue.css"
class Venue extends Component {
    constructor(props){
        super(props)
    }
    render() { 
        const {city, name, price, type, addVenue} = this.props
        return (   
        <div  className="venue">
        <ul>
        <li>{city}</li>
        <li>{name}</li>
        <li>{price}</li>
        <li>{type}</li>
        </ul>
        <button onClick = {event => addVenue(event)}>+</button>
    </div> 
    );
    }
}
 
export default Venue;