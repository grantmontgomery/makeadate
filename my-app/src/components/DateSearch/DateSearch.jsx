import React, { Component } from 'react';
import "./DateSearch.css"

class DateSearch extends Component {
    constructor(props){
        super(props)
        this.state={
            value: "",
            eventCategories: []
        }
    }
    // componentDidMount(){
    //     fetch("https://www.eventbrite.com/oauth/authorize?response_type=token&client_id=XTQS3OCYMLHMTVXSLN&redirect_uri=localhost:3000", {
    //         method: "GET",
    //         parameters:{client_id: "XTQS3OCYMLHMTVXSLN",
    //     redirect_uri: "localhost:3000"}
    //     }).then((response) => console.log(response))
    //     .catch(err => console.log(err.message))
    // }
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
                    <br/>
                    <br/>
                    <select name="date" id="1" style={{width: "100px"}}>
                        <option value="tonight"></option>
                        <option value="tomorrow"></option>
                        <option value="this weekend"></option>
                        <option value="next week"></option>
                        <option value="saturday"></option>
                    </select>
                </form>
            </div>
          );
    }
}
 
export default DateSearch;