import React, { Component } from 'react';
import "./Scheduler.css"
import "./Scheuduler1.svg"


class Scheduler extends Component {
    constructor(props){
        super(props)
    }
    render() {
        console.log(this.props.dateParts)
        return ( 
            <div className="scheduler">
                Scheduler
                
            </div>
         );
    }
}
 
export default Scheduler;