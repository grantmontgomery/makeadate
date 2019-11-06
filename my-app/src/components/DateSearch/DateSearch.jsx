import React, { Component } from 'react';
import "./DateSearch.css"

class DateSearch extends Component {
    constructor(props){
        super(props)
        this.state={
            value: ""
        }
    }
    updateInput(event){
        this.setState({value: event.target.value})
        console.log(this.state.value)
    }
    render() { 
        return (
            <div className="date-search">
                <form action="">
                    <input type="text"
                    value={this.state.value}
                    onChange={e => this.updateInput(e)}/>
                </form>
            </div>
          );
    }
}
 
export default DateSearch;