import React, { Component } from 'react'

export default class GifSearch extends Component {
    constructor() {
        super()
        this.state = {
            userInput: ""
        }
    }

    handleChange = e => {
        this.setState({
            userInput: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.fetchImages(this.state.userInput)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={e => this.handleChange(e)} value={this.state.userInput} />
                <input type="submit" />
            </form>
        )
    }
}