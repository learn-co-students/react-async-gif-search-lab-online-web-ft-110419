import React, { Component } from "react";

class GifSearch extends Component {

    constructor() {
        super()
        this.state = {
            query: ""
        }
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

    render() {
        return (
            <form onSubmit={event => this.props.onHandleSubmit(event, this.state.query)} >
                Enter a Search Term:
                <input id="query" 
                    name="query" 
                    type="text" 
                    value={this.state.query}
                    onChange={this.handleChange}
                />
                <button type="submit">Search</button>
            </form>
        )
    }
}


export default GifSearch