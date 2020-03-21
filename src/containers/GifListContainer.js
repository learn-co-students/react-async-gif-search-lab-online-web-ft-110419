import React, { Component } from "react";

import GifList from '/Users/jessebyers/Development/code/react-async-gif-search-lab-online-web-ft-110419/src/components/GifList'
import GifSearch from '/Users/jessebyers/Development/code/react-async-gif-search-lab-online-web-ft-110419/src/components/GifSearch'


class GifListContainer extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    componentDidMount() {
        let query = "penguin"
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
        .then(json => {
            console.log(json.data[0].images.original.url)
            this.setState({
                url1: json.data[0].images.original.url,
                url2: json.data[1].images.original.url,
                url3: json.data[2].images.original.url

            })
        })
    }

    handleSubmit = () => {
        console.log("handleSubmit function")
    }


    render() {
        console.log("GifListContainer rendering")
        return (
        <div>
            <GifSearch  onHandleSubmit={this.handleSubmit}/>
            <GifList results={this.state}/>
        </div>
        )
    }
}

export default GifListContainer;
