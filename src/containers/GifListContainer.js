import React, { Component } from 'react'
import GifSearch from '../components/GifSearch.js'
import GifList from '../components/GifList.js'
export default class GiftListContainer extends Component {
    constructor() {
        super()
        this.state = {
            imgs: [],
        }
    }
    fetchImages(subject = "dog") {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${subject}&api_key=h631fCr4Wwd5YpghYtSpU5KSo1fsrbCz&rating=g`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    imgs: json.data.map(gif => gif.images.original.url)
                })
            })
    }

    render() {
        return (
            <div>
                < GifSearch fetchImages={this.fetchImages} />
                < GifList listedImages={this.state.imgs} />
            </div>
        )
    }
    componentDidMount() {
        this.fetchImages()
    }

}