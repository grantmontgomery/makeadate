import React, { Component } from 'react';
import "./Scheduler.css"
import "./Scheuduler1.svg"


class Scheduler extends Component {
    constructor(props){
        super(props)
        this.state = {
            dateParts: this.props.dateParts
        }
    }
    render() {
        console.log(this.state.dateParts) 
        return ( 
            <div className="scheduler">
                Scheduler
                
            </div>
         );
    }
}
 
export default Scheduler;