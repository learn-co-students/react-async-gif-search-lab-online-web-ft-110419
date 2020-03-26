import React, {Component} from 'react'

export default class GifList extends Component{

    gifList = () => {
    return this.props.gifs.map((gif,index) =>{  
         return(  
             <li key={index}><img key={gif.id} src={gif.images.original.url} alt="gif" /></li>
            
         )
        }
        ).slice(0,3)
    }
    
   render(){
  
   return (<ul>{this.gifList()}</ul>
   )
   }
}