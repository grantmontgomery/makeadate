import React, { Component } from 'react';
import "./Scheduler.css"
import "./Scheuduler1.svg"


class Scheduler extends Component {
    constructor(props){
        super(props)
    }


    render() {
        return ( 
            <Consumer>
              {value => <div className="scheduler">
                Scheduler
                {value.dateParts}
                <div className="notification-icon">
                </div>
                </div>}
            </Consumer>
          
         );
    }
}
 
export default Scheduler;