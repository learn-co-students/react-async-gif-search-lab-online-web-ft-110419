import React from "react"
const GifList = (props) => {

    return (
        <ul>
            {props.listedImages.map(img => <li> <img key={img} src={img} width="200" alt={props} /> </li>)}
        </ul>
    )
}
export default GifList