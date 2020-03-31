import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends Component {
    state = {
        firstThreeGifs: []
    }

    handleSubmit = (event, input) => {
        event.preventDefault()
        fetch(`https://api.giphy.com/v1/gifs/search?q=${input}&api_key=B0LtAZY03QGTDbwIhOJAyoWAlydFDADQ&rating=g`)
        .then(res => res.json())
        .then(resObj => {
            let firstThree = resObj.data.slice(0,3);
            firstThree.map(obj => {
                return (
                    this.setState({
                        firstThreeGifs: [...this.state.firstThreeGifs, obj.images.original.url]
                    })
                )
            })
        })
    }

    render() {
        return (
            <div>
                <GifList gifs={this.state.firstThreeGifs} />
                <GifSearch handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}