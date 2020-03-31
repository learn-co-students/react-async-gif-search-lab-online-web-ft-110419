import React, { Component } from 'react';

export default class GifList extends Component {
    renderGifs = () => {
        return (
			this.props.gifs.map(gif => <li><img src={gif} alt={gif}></img></li>)
		)
    }

    render() {
        return (
            <ul>
                {this.renderGifs()}
            </ul>
        )
    }
}