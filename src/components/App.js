import React from 'react'

import NavBar from './NavBar'

import GifContainer from './GifListContainer'

// the App component should render out the GifListContainer component 

export default class App extends React.Component {

	render(){
  		return (
    	<div>
        	< NavBar color='black' title="Giphy Search" />
        	< GifContainer />
    	</div>
  		)
  	}
}
