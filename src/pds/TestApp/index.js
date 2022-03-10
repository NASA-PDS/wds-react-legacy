import React from 'react'
import ReactDOM from 'react-dom'
import TestApp from './TestApp'

const targetContainerId = `TestApp`
export default {
  init: config => {
   if(document.getElementById(targetContainerId)){
      ReactDOM.render(
        <TestApp/>,
        document.getElementById(targetContainerId),
      )
   } 
  },
  unmount() {
    const targetContainer = document.getElementById(targetContainerId)
    if (targetContainer) {
      ReactDOM.unmountComponentAtNode(
        document.getElementById(targetContainerId),
      )
    }
  },
}
