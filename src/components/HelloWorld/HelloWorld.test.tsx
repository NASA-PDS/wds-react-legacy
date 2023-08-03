import renderer from "react-test-renderer"
import { HelloWorld } from "./HelloWorld"

describe('HelloWorld', () => {

  test('HelloWorld component renders correctly', () => {
    const component = renderer.create(
      <HelloWorld />
    )

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('The name prop works', () => {
    const component = renderer.create(
      <HelloWorld name={'Universe'} />
    )

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

})