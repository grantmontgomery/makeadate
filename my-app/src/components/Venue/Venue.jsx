import React, { Component } from 'react';
import "./Venue.css"
import { EventsVenuesContext } from '../EventsVenues/Context';
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

    // addOrRemove=(addfunction, removefunction) => {
    //     if(this.state.AddRemove === "+"){
    //         addfunction()
    //         this.setState({AddRemove: "-"})
    //     }
    //     else{
    //         removefunction()
    //         this.setState({AddRemove: "+"})
    //     }
    // }

    // addOrRemove=(addfunction, removefunction, things) => {
    //     if(this.state.AddRemove === "+"){
    //         this.setState({AddRemove: "-"})
    //         return (
    //             <button onClick={() => removefunction(things)}>
    //                 {this.state.AddRemove}
    //             </button>
    //         )
            
    //     }
    //     else{
    //         this.setState({AddRemove: "+"})
    //         return (
    //             <button onClick={() => addfunction(things)}>
    //                 {this.state.AddRemove}
    //             </button>
    //         )
    //     }
    // }

    render() { 
        const {city, name, price, type} = this.state
        return (    
        <EventsVenuesContext.Consumer>
            {value => 
                <div  className="venue">
                <ul>
                <li>{city}</li>
                <li>{name}</li>
                <li>{price}</li>
                <li>{type}</li>
                </ul>
                <button onClick={() => value.addVenue(this.state)}>
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
 
export default Venue;