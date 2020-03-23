import React, { Component } from "react";

export default class GifList extends Component {
  listofGifs = () => {
    console.dir(this.props.gifUrl);
    return this.props.gifUrl.map(url => (
      <li>
        <img src={url} alt="" />
      </li>
    ));
  };

  render() {
    return <ul>{this.listofGifs()}</ul>;
  }
}
