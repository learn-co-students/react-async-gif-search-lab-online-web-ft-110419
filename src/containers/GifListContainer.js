import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

  state = {
    gihpys: []
  }


  render() {
    return (
      <div>
        <GifSearch fetchGiphys={this.fetchGiphys} />
        <GifList giphys={this.state.giphys} />
      </div>
    )
  }

fetchGiphys = (query = "cowboys") => {
  fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=oSOJTmf9Vazo8VwwtB3x4nGLBTVIOkeK`)
    .then(res => res.json())
    .then(({data}) => {
      this.setState({ giphys: data.map( gif => ({ url: gif.images.original.url }) ) })
    })
}


  componentDidMount() {
    this.fetchGiphys()
  }
}
