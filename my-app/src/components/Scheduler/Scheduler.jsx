import React, { Component } from 'react';
import "./Scheduler.css"


class Scheduler extends Component {
    constructor(props){
        super(props)
    }
    render() { 
        return ( 
            <div className="scheduler" style={{border: "1px solid white"}}>
                Scheduler
            </div>
         );
    }
}
 
export default Scheduler;