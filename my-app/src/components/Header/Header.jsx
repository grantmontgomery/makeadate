import React, { Component } from 'react';
import "./Header.css"
// import Picker from "./ScrollablePicker.jsx"
import {ThatsPicker} from "../ThatsPicker"
// import Couple_1 from "./pictures/coupleondate.jpg"





class Header extends Component {
    state = {  }
    styles = {
        height: "100%",
        width: "100%",
        allignContent: "center",
        // background: "url({Couple_1})",
        // bacgkroundSize: "auto 100%"
        // zIndex: "-1"
        
    }
    render() { 
        return (
            <header style={this.styles}>
                
               <div className="easypicker">
                  
                   <ThatsPicker>
                       </ThatsPicker>
                       
                </div>


            </header>
          );
    }
}
 
export default Header;