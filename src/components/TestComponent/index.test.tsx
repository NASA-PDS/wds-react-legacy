import renderer from 'react-test-renderer'
import { describe, expect, test } from 'vitest'
import TestComponent from './index'

describe('TestComponent', () => {

  test('TestComponent component renders correctly', () => {
    const component = renderer.create(
      <TestComponent />
    )

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('The name prop works', () => {
    const component = renderer.create(
      <TestComponent name={'Universe'} />
    )

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
  
})