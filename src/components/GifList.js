import React, { Component } from "react";

class GifList extends Component {

    render() {
        return (
            <ul>
                <li><img src={this.props.results.url1} alt="url1"/></li>
                <li><img src={this.props.results.url2} alt="url2"/></li>
                <li><img src={this.props.results.url3} alt="url3"/></li>
            </ul>
        )
    }
}

export default GifList