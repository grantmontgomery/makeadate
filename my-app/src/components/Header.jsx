import React, { Component } from 'react';
import "./Header.css"
// import Picker from "./ScrollablePicker.jsx"
import ThatsPicker from "./ThatsPicker.jsx"
// import Couple_1 from "./pictures/coupleondate.jpg"





class Header extends Component {
    state = {  }
    styles = {
        // height: "100vh",
        width: "100%",
        // background: "url({Couple_1})",
        // bacgkroundSize: "auto 100%"
        // zIndex: "-1"
    }
    render() { 
        return (
            <header style={this.styles}>
                
               <div>
                   <span style={{color: "white"}}>Make a date that's</span>
                    <ThatsPicker>

                    </ThatsPicker>

                </div>


            </header>
          );
    }
}
 
export default Header;