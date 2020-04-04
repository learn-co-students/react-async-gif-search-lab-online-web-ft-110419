import React, {Component} from "react"
 class GifList extends Component {

    render() {
        
        return (
            <ul>
                {this.props.listedImages.map(img => <li> <img key={img} src={img}  width="200"/> </li>)}
            </ul>
        )
    }
}
export default GifList