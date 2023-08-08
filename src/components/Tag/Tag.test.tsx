import renderer from 'react-test-renderer'
import { describe, expect, test } from 'vitest'
import { Tag } from "./Tag"

describe('Tag', () => {

  test('Tag component renders correctly', () => {
    const component = renderer.create(
      <Tag/>
    )

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('The label prop works', () => {
    const component = renderer.create(
      <Tag label={'test label'} />
    )

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

})