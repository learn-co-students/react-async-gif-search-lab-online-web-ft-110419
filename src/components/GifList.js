import React from 'react'

function GifList(props){

    function renderGifs(){
        return props.gifs.map(g => {
            return <li><img alt={g.title} src={g.images.original.url}/></li>
        })
    }


    return(
        <ul id="gif-list">
            {renderGifs()}
        </ul>
    )
}

export default GifList