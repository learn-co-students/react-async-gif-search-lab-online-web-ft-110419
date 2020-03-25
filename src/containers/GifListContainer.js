import React, {Component} from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'
export default class GifListContainer extends Component{
constructor(){
    super()
    this.state = {
    gifs: []
}};
    

searchGif = (e,query) =>{
    e.preventDefault()
  
    //  let query = e.target.querySelector("input").value
    let api = "IzirgiO1ytvpeWonxkcb8YFRst1OjAKp"
    return fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${api}&tag=&rating=G`).then(res => res.json()).then(gifs =>{ 
        this.setState({gifs: gifs.data})
        
    })
}

    render(){
        return(
            <div>
                <GifSearch submit={this.searchGif}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }
}
