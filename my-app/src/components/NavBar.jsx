import React, { Component } from 'react';
import "./NavBar.css"

class NavBar extends Component {
    state = {  }
    styles = {
        height: "50px",
        width: "100%",
        backgroundColor: "FFFFFF",
        margin: "0px",
        opacity: "0.5",
        filter: "alpha(opacity=50)"
        
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