import React, { Component } from 'react'
import './css/App.css'

class App extends Component {
  constructor(props) {
    super(props)
    console.log('reactWidget constructor called with props:', props)
  }

  render() {
    return (
      <div className="reactWidget__secondary_container">
        <div id="demo-widget">
          <span className="top" />
        </div>
      </div>
    )
  }
}

export default App
