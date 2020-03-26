import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gifs: []

    }
  }
  
  handleSearch = (event, query) => {
    event.preventDefault()
    this.sendPostRequest(query)
  }

  sendPostRequest(query) {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(res => res.json())
    .then(this.storeGifLinks)
  }

  storeGifLinks = (response) => {
    let gifLinks = response.data.map(gif => gif.images.original.url).slice(0,3)
    
    this.setState({
      gifs: gifLinks
    }, ()=> this.state)
  }
  
  render() {
    return (
      <div className='GifListContainer'>
        <h1>hello</h1>
        <GifSearch handleSearch={this.handleSearch} />
        <GifList links={this.state.gifs} />
      </div>
    )
  }
}

export default GifListContainer