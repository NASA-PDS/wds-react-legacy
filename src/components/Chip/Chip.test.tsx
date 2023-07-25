import renderer from 'react-test-renderer'
import { describe, expect, test } from 'vitest'
import { Chip } from "./Chip"

describe('Chip', () => {

  test('Chip component renders correctly', () => {
    const component = renderer.create(
      <Chip/>
    )

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('The label prop works', () => {
    const component = renderer.create(
      <Chip label={'test label'} />
    )

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

})