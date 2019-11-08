import React, { Component } from 'react';
import "./Venue.css"
class Venue extends Component {
    constructor(props){
        super(props)
        console.log(this.props)
    }
    render() { 
        const {city, name, price} = this.props
        return (   
        <div  className="venue">
        <ul>
        <li>{city}</li>
        <li>{name}</li>
        <li>{price}</li>
        </ul>
    </div> 
    );
    }
}
 
export default Venue;