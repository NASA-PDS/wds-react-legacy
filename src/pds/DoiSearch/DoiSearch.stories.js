// /src/components/Button/button.stories.js
import React from 'react'
import DoiSearch from './DoiSearch'
import { withKnobs, text } from '@storybook/addon-knobs'

export default { title: 'DOI Search', decorators: [withKnobs]}
export const doiSearch = () => {
  return <DoiSearch/>
}