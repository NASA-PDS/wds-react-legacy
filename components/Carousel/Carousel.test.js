import React from 'react'
import { render, test, expect } from '@testing-library/react'
import Carousel from './Carousel.css'

test('renders learn react link', () => {
    const { getByText } = render(<Carousel />)
    const linkElement = getByText(/learn react/i)
    expect(linkElement).toBeInTheDocument()
});