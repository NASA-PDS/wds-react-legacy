import React from 'react'
import ReactDOM from 'react-dom'
import TestApp from './TestApp'

const targetContainerId = `TestApp`
export default {
  init: config => {
    /*if (!document.getElementById(targetContainerId)) {
      const targetContainer = document.createElement('div')
      targetContainer.setAttribute('id', targetContainerId)
      document.body.appendChild(targetContainer)
    }
    */
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
