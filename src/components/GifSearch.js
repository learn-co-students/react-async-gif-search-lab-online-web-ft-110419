import React, { Component } from 'react';

export default class GifSearch extends Component {
    state = {
        input: ""
    }

    handleInputChange = event => {
        this.setState({
            input: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={event => this.props.handleSubmit(event, this.state.input)}>
                <input type="text" name="firstName" onChange={event => this.handleInputChange(event)} value={this.state.input} />
                <input type="submit" value="Search" />
            </form>
        )
    }
}