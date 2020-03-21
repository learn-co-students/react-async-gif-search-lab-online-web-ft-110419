import React, { Component } from "react";

import GifList from '/Users/jessebyers/Development/code/react-async-gif-search-lab-online-web-ft-110419/src/components/GifList'
import GifSearch from '/Users/jessebyers/Development/code/react-async-gif-search-lab-online-web-ft-110419/src/components/GifSearch'


class GifListContainer extends Component {
    constructor() {
        super()
        this.state = {
            url1: "",
            url2: "",
            url3: ""
        }
    }

    handleSubmit = (event, query) => {
        event.preventDefault()
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
        .then(json => {
            this.setState({
                url1: json.data[0].images.original.url,
                url2: json.data[1].images.original.url,
                url3: json.data[2].images.original.url
            })
        })
    }

    renderList = () => {
        if (this.state.url1 !== "") {
            return (<GifList results={this.state}/>)
        }
    }

    render() {
        return (
        <div>
            <GifSearch onHandleSubmit={this.handleSubmit}/>
            {this.renderList()}
        </div>
        )
    }
}

export default GifListContainer;
