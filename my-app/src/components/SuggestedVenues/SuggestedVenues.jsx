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
                    type: "venue",
                    name: "sushiXpress",
                    city: "Los Angeles",
                    price: "$",
                },
                {
                    id: 2,
                    type: "venue",
                    name: "halalguys",
                    city: "Los Angeles",
                    price: "$$",
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
                    const {id, name, city, type, price} = venue
                    return(
                        <Venue id={id} key={id} type={type} name={name} city={city} price={price}>

                        </Venue>

                    )
                })}
            </div>
         );
    }
}
 
export default SuggestedVenues;