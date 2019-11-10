import React, { Component } from 'react';
import "./Venue.css"
class Venue extends Component {
    constructor(props){
        super(props)
        this.state = {
            city: this.props.city,
            name: this.props.name,
            price: this.props.price,
            type: this.props.type
        }
    }
    render() { 
        const {addVenue} = this.props
        const {removePart} = this.props
        const {city, name, price, type} = this.state
        return (   
        <div  className="venue">
        <ul>
        <li>{city}</li>
        <li>{name}</li>
        <li>{price}</li>
        <li>{type}</li>
        </ul>
        <button onClick = {() => addVenue(this.state)}>+</button>
        <button onClick= {() => removePart(name)}>
            -
        </button>
    </div> 
    );
    }
}
 
export default Venue;