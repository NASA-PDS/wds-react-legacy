import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const targetContainerId = `widget__container`
export default {
  init: config => {
    if (!document.getElementById(targetContainerId)) {
      const targetContainer = document.createElement('div')
      targetContainer.setAttribute('id', targetContainerId)
      document.body.appendChild(targetContainer)
    }
    ReactDOM.render(
      <App apiKey={config.apiKey} authId={config.authId} env={config.env} />,
      document.getElementById(targetContainerId),
    )
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
