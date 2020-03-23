import React, { Component } from 'react';

export default class GifSearch extends Component {

	state = { query: '' }

	handleChange = event => {
		this.setState({
			query: event.target.value
		});
	}

	handleSubmit = event => {
		event.preventDefault();
		this.props.callback(this.state.query);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input onChange={this.handleChange} id="query" type="text" />
				<input type="submit" value="Search" />
			</form>
		)
	}
}
