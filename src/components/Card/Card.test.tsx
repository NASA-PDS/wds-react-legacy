import renderer from 'react-test-renderer'
import { describe, expect, test } from 'vitest'
import { Card } from "./Card"
import testImage from '../../nasaTest.jpeg';

describe('Card', () => {

  test('Card component renders correctly', () => {
    const component = renderer.create(
      <Card
        title = {'Astronauts'}
        content = {'Learn about those of the NASA corps who make "space sailing" their career profession.'}
        image = {testImage}
      
      />
    )

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('The label prop works', () => {
    const component = renderer.create(
      <Card
        title = {'Astronauts'}
        content = {'Learn about those of the NASA corps who make "space sailing" their career profession.'}
        image = {testImage}
      
      />
    )

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

})