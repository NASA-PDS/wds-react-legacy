import { StoryObj, Meta } from "@storybook/react";
import { Card } from "./Card";

export default { 
   component: Card,
} as Meta<typeof Card>;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
   args: {
   }
};

export const Text: Story = {
   args: {
      title: 'Astronauts',
      content: 'Learn about those of the NASA corps who make "space sailing" their career profession.'
   },
};