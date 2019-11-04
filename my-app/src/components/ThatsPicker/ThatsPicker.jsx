import React, { Component } from 'react';
import "./ThatsPicker.css"
import {SearchIcon} from "../../icons"
import { thisTypeAnnotation } from '@babel/types';



class ThatsPicker extends Component {
    
    state = {
        value: "...",
        selectors: [
            {id: 1, value: "tonight"},
            {id: 2, value: "this weekend"},
            {id: 3, value: "free"},
            {id: 4, value: "lit"},
            {id: 5, value: "thought-provoking"},
            {id: 6, value: "lit"},
            {id: 7, value: "fancy"},
            {id: 8, value: "at a bar"}
        ]

      }
    inputChange(event){
        this.setState({value: event.target.value})
    }
    // random = () => {
    //     setTimeout(

    //         this.setState({value: this.state.selectors[] }), 2000)
        
    // }

    render() {
        return (
            <div className="thats-picker-container">
                <form className="thats-picker-form">
                    <SearchIcon/>
                    <input type="text" value={this.state.value} 
                    className="thats-picker-input"
                    onChange={e => this.inputChange(e)}
                    />
                </form>

            </div>
          );
    }
}
 
export default ThatsPicker;