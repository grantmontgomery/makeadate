import React, { Component } from 'react';
import {Venue} from "../Venue"
import "./SuggestedVenues.css"


class SuggestedVenues extends Component {
    constructor(props){
        super(props)
        this.state = {
            venues:[
                {
                    id: 1,
                    name: "sushiXpress",
                    city: "Los Angeles",
                    price: "$"
                }
            ]
        }
    }
    render() { 
        const {venues} = this.state
        return ( 
            <div className="suggested-venues">
                Suggested Venues
                {venues.map(venue =>{
                    const {id, name, city, price} = venue
                    return(
                        <Venue id={id} key={id} name={name} city={city} price={price} addVenue={this.props.addpart}>

                        </Venue>

                    )
                })}
            </div>
         );
    }
}
 
export default SuggestedVenues;