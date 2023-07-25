import { StoryObj, Meta } from "@storybook/react";
import { Card } from "./Card";

export default { 
   component: Card,
} as Meta<typeof Card>;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
   args: {
   },
};