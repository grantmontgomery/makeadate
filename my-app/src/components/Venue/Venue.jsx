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
            type: this.props.type,
            AddRemove: "+",
            buttonSwitch: "add"
        }
    }

    changeButton = (addfunction, removefunction) => {
        if(this.state.AddRemove === "+"){
            addfunction(this.state)
            this.setState({AddRemove: "-", buttonSwitch: "remove"})
        }
        else{
            removefunction(this.state.name)
            this.setState({AddRemove: "+", buttonSwitch: "add"})
        }
    }


    render() { 
        const {city, name, price, type, buttonSwitch} = this.state
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
                <button className={buttonSwitch} onClick={() => this.changeButton(value.addPart, value.removePart)}>
                    {this.state.AddRemove}
                </button>
            </div> 
            
            }

        </EventsVenuesContext.Consumer>
    );
    }
}
 
export default Venue;