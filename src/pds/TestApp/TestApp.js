import React, { Component } from 'react'
//import './css/App.css'
import Paper from '@material-ui/core/Paper';

class TestApp extends Component {
  constructor(props) {
    super(props)
    console.log('reactWidget constructor called with props:', props)
  }

  render() {
    return (
      <Paper variant="outlined" square>
        <p>Secondary widget test</p>
        <div className="reactWidget__secondary_container">
          <p>reactWidget__secondary_container</p>
          <div id="demo-widget">
            <p>Demo Widget</p>
            <span className="top">Top</span>
          </div>
        </div>
      </Paper>
    )
  }
}

export default TestApp
