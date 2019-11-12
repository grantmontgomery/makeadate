import React, { Component } from 'react';
import "./Scheduler.css"
import "./Scheuduler1.svg"


class Scheduler extends Component {
    constructor(props){
        super(props)
        this.state={
            dateParts: this.props.dateParts
        }
    }


    render() {
        console.log(this.props.dateParts)
        return (
            <div className="scheduler">
                Scheduler
                <div className="notification-icon">
                    {this.props.dateParts.length}
                </div>
            </div>
         );
    }
}
 
export default Scheduler;