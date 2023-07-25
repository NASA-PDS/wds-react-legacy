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

export const Documentation: Story = {
   args: {
     variant: "documentation"
   },
};

export const Tool: Story = {
   args: {
      variant: "tool"
   },
};
