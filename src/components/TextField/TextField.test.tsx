import renderer from 'react-test-renderer'
import { describe, expect, test } from 'vitest'
import { TextField } from "./TextField"

describe('TextField', () => {

  test('TextField component renders correctly', () => {
    const component = renderer.create(
      <TextField/>
    )

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('The label prop works', () => {
    const component = renderer.create(
      <TextField />
    )

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

})