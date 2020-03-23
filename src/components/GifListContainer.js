import React from 'react'

import GifSearch from './GifSearch.js'

export default class GifListContainer extends React.Component{

	state = {
		query: "",
		results: []
	}

	changeQuery = (event) => {
		this.setState({
			query: event.target.value
		})
	}

	renderGifs = () => {
		return "GIFS HERE"
	}

	fetchData = (event) => {
		event.preventDefault()
		if (this.state.query !== "") {
			fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC&rating=g`).then(response => response.json()).then(json => {
				this.setState({
					results: json.data.slice(0, 7)
				})
			})
		}
	}

	renderGifs = () => {
		return this.state.results.map(gif => <div className="gif"><img src={gif.images.original.url} alt={gif.title}/><br /></div>)
	}


	render() {
		return(
			<div id="container">
				<div id="gifSearch">
					<GifSearch changeQuery = {this.changeQuery} fetchData = {this.fetchData} />
				</div>
				<div id="gifs">
					{this.renderGifs()}
				</div>
			</div>
		)

	}

}