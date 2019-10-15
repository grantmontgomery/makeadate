import React, { Component } from 'react';
import "./NavBar.css"

class NavBar extends Component {
    state = {  }
    styles = {
        height: "50px",
        width: "100%",
        backgroundColor: "black",
        margin: "0px"
    }
    render() { 
        return (
            <React.Fragment>
                <nav style={this.styles}>
                
                </nav>
            </React.Fragment>
          );
    }
}
 
export default NavBar;