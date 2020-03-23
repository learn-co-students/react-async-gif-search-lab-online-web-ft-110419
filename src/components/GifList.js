import React, { Component } from 'react';

export default class GifList extends Component {
	render() {
		return (
			this.props.gifs.map(gif => <img key={gif} src={gif} alt={gif}></img>)
		);
	}
}
