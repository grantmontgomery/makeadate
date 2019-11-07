import React, { Component } from 'react';
import "./Header.css"

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