import { StoryObj, Meta } from "@storybook/react";
import { FeaturedLinkListItem } from "./FeaturedLinkListItem";

export default { 
   component: FeaturedLinkListItem,
} as Meta<typeof FeaturedLinkListItem>;
type Story = StoryObj<typeof FeaturedLinkListItem>;

export const Default: Story = {
   args: {
   },
};

export const Data: Story = {
   args: {
     variant: "data",
     title : 'urn:ESA:PSA:context:instrument_host:* context products',
     description : 'The PDS4 Context Products for ESA instrument hosts, e.g. Rosetta spacecraft',
     startDateTime : 'start_date_time": "2001-09-29T00:00:00Z',
     stopDateTime : '2008-09-21T13:07:29Z',
     lid : 'urn:nasa:pds:ast_spectra_reddy_neos_marscrossers:data::1.0',
     version : '1.0'
   },
};

export const Documentation: Story = {
   args: {
     variant: "documentation",
     title : 'urn:ESA:PSA:context:instrument_host:* context products',
     description : 'The PDS4 Context Products for ESA instrument hosts, e.g. Rosetta spacecraft',
     startDateTime : 'start_date_time": "2001-09-29T00:00:00Z',
     stopDateTime : '2008-09-21T13:07:29Z',
     lid : 'urn:nasa:pds:ast_spectra_reddy_neos_marscrossers:data::1.0',
     version : '1.0'
   },
};

export const Tool: Story = {
   args: {
      variant: "tool",
      title : 'urn:ESA:PSA:context:instrument_host:* context products',
      description : 'The PDS4 Context Products for ESA instrument hosts, e.g. Rosetta spacecraft',
      startDateTime : 'start_date_time": "2001-09-29T00:00:00Z',
      stopDateTime : '2008-09-21T13:07:29Z',
      lid : 'urn:nasa:pds:ast_spectra_reddy_neos_marscrossers:data::1.0',
      version : '1.0'
   },
};
