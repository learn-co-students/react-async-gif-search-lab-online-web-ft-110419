//search component

import React, {Component} from 'react';

export default class GifSearch extends Component{

    state = {
        query: ""
    }


    handleSubmit = e => {
        e.preventDefault()
        this.props.fetchGifs(this.state.query)
    }

    render(){
        return(
            <div id="search_bar">
                <form onSubmit={this.handleSubmit} >
                    <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
                    <input type="submit" />
                </form>
            </div>
        )
    }

}