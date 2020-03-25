import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends React.Component {


    state = {
       gifs: [],
    }

    componentDidMount(){
        this.fetchGifs('random')
    }

    fetchGifs(searchTerm){
        let url = 'https://api.giphy.com/v1/gifs/search?q=' + searchTerm + '&api_key=3e0BrMmCz7G6klhV6uFOOVQxM6xsFeU9&rating=g'
        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({gifs: data.data.slice(0,3)}))
    }

    searchGifs = (searchTerm) => {
        this.fetchGifs(searchTerm)
    }

    render(){
        return(
            <div id="gif-container">
                <GifSearch searchGifs={this.searchGifs} />
                <hr />
                <GifList gifs={this.state.gifs} />

            </div>
        )}
}

export default GifListContainer


