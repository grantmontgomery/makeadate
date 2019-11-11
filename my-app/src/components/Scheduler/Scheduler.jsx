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
                  <div className="scheduler">
                    
                    </div>


            </EventsVenuesContext.Consumer>
            
          
         );
    }
}
 
export default Scheduler;