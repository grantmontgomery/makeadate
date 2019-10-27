import React, { Component } from 'react';
import "./Header.css"
// import Picker from "./ScrollablePicker.jsx"
import {ThatsPicker} from "../ThatsPicker"
// import Couple_1 from "./pictures/coupleondate.jpg"





class Header extends Component {
    state = {  }

    render() { 
        return (
            <header className="main-header">
                
               <span className="headline">Make a date that's</span>
                   <ThatsPicker>
                       </ThatsPicker>
        
            </header>
          );
    }
}
 
export default Header;