import React, { Component } from 'react';
import "./Header.css"
// import Picker from "./ScrollablePicker.jsx"
// import Couple_1 from "./pictures/coupleondate.jpg"
import {DateSearch} from "../DateSearch"





class Header extends Component {
    state = {  }

    render() { 
        return (
            <header className="main-header">
                <DateSearch>

                </DateSearch>
            </header>
          );
    }
}
 
export default Header;