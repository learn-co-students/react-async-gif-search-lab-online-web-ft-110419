import React, { Component } from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

export default class GifListContainer extends Component {

	state = { gifs: [] }

	handleSubmit = query => {
		fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
		.then(response => response.json())
		.then(object => {
			const elements = [];

			if (object.data) {
				for (let i = 0; i < 3 && i < object.data.length; i++) {
					elements.push(object.data[i].images.original.url);
				}
			}

			this.setState({
				gifs: elements
			});
		});
	}

	render() {
		return(
			<div>
				<GifSearch callback={this.handleSubmit} />
				<GifList gifs={this.state.gifs} />
			</div>
		);
	}
}
