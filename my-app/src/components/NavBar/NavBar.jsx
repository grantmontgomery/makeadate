import React, { Component } from 'react';
import {City} from "../City"
import {Login} from "../Login"
import {AppContext} from "../../AppContext"
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
        
        // filter: "alpha(opacity=50)"
        
    }
    render() { 
        return (
            <AppContext.Consumer>
                {
                    value => {
                        if(value.errorMessage !== ""){
                            return(
                                <nav style={this.styles}>
                                <a href=""className="logo">make a date</a>
                                <Login></Login>
                             </nav>
                            )
                        }
                        else{
                            return(
                                <nav style={this.styles}>
                                <a href=""className="logo">make a date</a>
                                <City></City>
                                <Login></Login>
                            </nav>
                            )
                        }
                    }
                }
            </AppContext.Consumer>
          );
    }
}
 
export default NavBar;