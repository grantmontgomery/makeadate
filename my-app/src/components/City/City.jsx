import React, { Component } from 'react';
import {AppContext} from "../../AppContext"
import "./City.css"



class City extends Component {
    state = {  }
    render() { 
        return (
            <AppContext.Consumer>
                {value =>
                    <div className="city-box">
                        {value.city}
                    </div>
                
                }
            </AppContext.Consumer>
          );
    }
}
 
export default City;