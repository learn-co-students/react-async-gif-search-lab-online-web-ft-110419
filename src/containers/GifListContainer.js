// data fetching
// https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=YOUR API KEY&rating=g
//API Key: H5X86vdLWQTIBOoN18Ik8HgsumdWE6dL

import React, {Component} from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component{

    state = {
        gifURLs: []
    }

    render(){
        return(
            <div>
                <GifSearch fetchGifs={this.fetchGifs} />
                <GifList gifs={this.state.gifURLs} />
            </div>
        )
    }

    fetchGifs = query => {
        fetch("https://api.giphy.com/v1/gifs/search?q={query}n&api_key=H5X86vdLWQTIBOoN18Ik8HgsumdWE6dL")
        .then(res => res.json())
        .then( obj => {
            const elements = [];
			if (obj.data) {
				for (let i = 0; i < 3 && i < obj.data.length; i++) {
					elements.push(obj.data[i].images.original.url);
				}
            }
			this.setState({
                gifURLs: elements
			});
        })
    }

    componentDidMount(){
        this.fetchGifs()
    }

}