import { StoryObj, Meta } from "@storybook/react";
import { HelloWorld } from "./HelloWorld";

export default { 
   component: HelloWorld,
} as Meta<typeof HelloWorld>;
type Story = StoryObj<typeof HelloWorld>;

export const Default: Story = {
   args: {
   },
};

export const CustomName: Story = {
   args: {
     name: "Ceres"
   },
};

export const BoldStyle: Story = {
   args: {
      style: "bold"
   },
};

export const HeadingStyle: Story = {
   args: {
      style: "heading"
   },
};