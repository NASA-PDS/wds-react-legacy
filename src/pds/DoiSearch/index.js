import React from 'react'
import ReactDOM from 'react-dom'
import DoiSearch from './DoiSearch'

const targetContainerId = `DoiSearch`
export default {
  init: config => {
    if(document.getElementById(targetContainerId)){
        ReactDOM.render(
            <DoiSearch/>,
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
