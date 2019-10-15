import React, { Component } from 'react';
import "./Header.css"
import ScrollablePicker from "./ScrollablePicker.jsx"





class Header extends Component {
    state = {  }
    styles = {
        height: "40vh"
    }
    render() { 
        return (
            <header style={this.styles}>
                
               <div>
                   <span>"Make a date that's"</span>
                    <ScrollablePicker>

                    </ScrollablePicker>
                
                </div>


            </header>
          );
    }
}
 
export default Header;