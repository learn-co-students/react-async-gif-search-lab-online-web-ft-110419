import React from 'react'

import NavBar from './NavBar'
import GifListContainer from '/Users/jessebyers/Development/code/react-async-gif-search-lab-online-web-ft-110419/src/containers/GifListContainer'

const App = () => {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        < GifListContainer />
    </div>
  )
}

export default App
