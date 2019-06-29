import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

let reactWidgetConfig = null
export default {
  config: config => {
    reactWidgetConfig = config
  },

  widgets: {
    myWidget: {
      new: config => {
        return {
          render: args => {
            ReactDOM.render(
              <App
                apiKey={
                  args.apiKey || config.apiKey || reactWidgetConfig.apiKey
                }
                authId={
                  args.authId || config.authId || reactWidgetConfig.authId
                }
                selector={config.selector || reactWidgetConfig.selector}
              />,
              document.querySelector(config.selector),
            )
          },
          unmount() {
            ReactDOM.unmountComponentAtNode(
              document.querySelector(config.selector),
            )
          },
        }
      },
    },
  },
}
