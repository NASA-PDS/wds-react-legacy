// /src/components/Button/button.stories.js
import React from 'react'
import TestApp from './TestApp'
import { withKnobs, text } from '@storybook/addon-knobs'

export default { title: 'Test App', decorators: [withKnobs]}
export const testApp = () => {
  return <TestApp/>//<Button message={message}></Button>
}