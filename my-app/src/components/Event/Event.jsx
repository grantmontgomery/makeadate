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
            price: this.props.price,
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
        const {city, time, name, type, price, buttonSwitch} = this.state
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
                    <button className={buttonSwitch} onClick={() => this.changeButton(value.addPart, value.removePart)}>
                        {this.state.AddRemove}
                    </button>
                    {/* {this.changeButton(value.add_remove)} */}
                </div>

                }
            </EventsVenuesContext.Consumer>
            
         );
    }
}
 
export default Event;