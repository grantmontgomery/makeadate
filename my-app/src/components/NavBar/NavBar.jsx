import React, { Component } from 'react';
import {Scheduler} from "../Scheduler"
import {City} from "../City"
import {Login} from "../Login"
import "./NavBar.css"

class NavBar extends Component {
    state = {  }
    styles = {
        height: "50px",
        width: "100%",
        // backgroundColor: "FFFFFF",
        zIndex: "1",
        margin: "0px",
        background: "rgba(63, 63, 63, 0.2)",
        display: "inline-block",
        right: "5%"
        
        // filter: "alpha(opacity=50)"
        
    }
    render() { 
        return (
            <React.Fragment>
                <nav style={this.styles}>
                    <a href=""className="logo">make a date</a>
                    <City></City>
                    <Scheduler></Scheduler>
                    <Login></Login>
                </nav>
            </React.Fragment>
          );
    }
}
 
export default NavBar;