import React, { Component } from 'react';
import "./Scheduler.css"
import "./Scheuduler1.svg"
import { EventsVenuesContext } from '../EventsVenues/Context';


class Scheduler extends Component {
    constructor(props){
        super(props)
    }


    render() {
        return ( 
            <EventsVenuesContext.Consumer>
                {value => 
                <div className="scheduler">
                    {value.dateParts.length}
                </div>
                }
            </EventsVenuesContext.Consumer>
         );
    }
}



export default Scheduler;