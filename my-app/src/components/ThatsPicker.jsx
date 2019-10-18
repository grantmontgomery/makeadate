import React, { Component } from 'react';
import "./ThatsPicker.css"



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

    updateSearch(value) {
        this.setState(this.state.value = value)
    } 
    random() {
        setInterval(() => {
            // let random = ""
            // for(let i = 0; i < this.state.selectors.length; i++){
            //     random = this.state.selectors[i].value
            // }
            let index = Math.floor(Math.random() * this.state.selectors.length)
            let random_attribute = this.state.selectors[index].value
            // this.setState({ value: random_attribute})
            this.setState({value: random_attribute})

            
        }, 3500);

    }

    // stoprandom() {
    //     this.setState({value: ""})
    // }

    render() {
        // console.log(this.random())
        return (
            <React.Fragment>
                {/* {this.random()} */}
               <span>
        
                <input list="selectors" name="..." 
                className="searchbar"
                placeholder={this.state.value}
                value={this.state.value}
                onChange={e => this.updateSearch(e.target.value)}
                />
                    <datalist id="selectors" className="searchbar">
                        {
                            this.state.selectors.map(selector =>
                                <option id={selector.id} value={selector.value} className="searchbar">

                                </option>)
                        }
                    </datalist>
            
                </span> 

            </React.Fragment>
          );
    }
}
 
export default ThatsPicker;