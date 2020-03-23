import React, { Component } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

class GifListContainer extends Component {
  state = {
    gifys: []
  };

  componentDidMount() {
    this.fetchGifys();
  }

  fetchGifys = (query = "dolphin") => {
    this.apiKey = "cai4u95qU8k1S7Yt16s8HGndcXPYRx8p";
    this.baseUrl = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${this.apiKey}&tag=&rating=G`;
    fetch(this.baseUrl)
      .then(res => res.json())
      .then(this.handleGifyFetchSetState);
  };

  handleGifyFetchSetState = gifyObj => {
    this.setState({
      gifys: gifyObj.data.map(obj => obj.images.original.url).slice(0, 3)
    });
  };

  handleSubmit = (e, search) => {
    e.preventDefault();
    this.fetchGifys(search);
  };

  render() {
    return (
      <div>
        <GifSearch submit={this.handleSubmit} />
        <GifList gifUrl={this.state.gifys} />
      </div>
    );
  }
}

export default GifListContainer;
