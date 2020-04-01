import React, { Component } from 'react'
import { API_KEY } from '../api_key';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends Component {
  state = {
    gifs: [],
    query: ''
  }

  handleChange = e => {
    this.setState({ query: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchGifs();
  }

  fetchGifs = () => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=${API_KEY}&rating=g`)
      .then(res => res.json())
      .then(json => {
        const gifs = JSON.parse(JSON.stringify(json.data)).slice(0, 3);
        this.setState({ gifs })
      })
      .catch(e => console.log(e.message))
  }

  render() {
    return (
      <div>
        <GifSearch query={this.state.query} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}
