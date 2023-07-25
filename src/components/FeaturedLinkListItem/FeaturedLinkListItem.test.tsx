import renderer from 'react-test-renderer'
import { describe, expect, test } from 'vitest'
import { FeaturedLinkListItem } from "./FeaturedLinkListItem"

describe('FeaturedLinkListItem', () => {

  test('FeaturedLinkListItem component renders correctly', () => {
    const component = renderer.create(
      <FeaturedLinkListItem
        title = 'urn:ESA:PSA:context:instrument_host:* context products'
        variant = 'data'
        description = 'The PDS4 Context Products for ESA instrument hosts, e.g. Rosetta spacecraft'
        startDateTime = 'start_date_time": "2001-09-29T00:00:00Z'
        stopDateTime = '2008-09-21T13:07:29Z'
        lid = 'urn:nasa:pds:ast_spectra_reddy_neos_marscrossers:data::1.0'
        version = '1.0'
      />
    )

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('The label prop works', () => {
    const component = renderer.create(
      <FeaturedLinkListItem
        title = 'urn:ESA:PSA:context:instrument_host:* context products'
        variant = 'data'
        description = 'The PDS4 Context Products for ESA instrument hosts, e.g. Rosetta spacecraft'
        startDateTime = 'start_date_time": "2001-09-29T00:00:00Z'
        stopDateTime = '2008-09-21T13:07:29Z'
        lid = 'urn:nasa:pds:ast_spectra_reddy_neos_marscrossers:data::1.0'
        version = '1.0'
      />
    )

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

})