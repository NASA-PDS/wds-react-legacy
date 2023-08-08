import { StoryObj, Meta } from "@storybook/react";
import { TextField } from "./TextField";

export default { 
   component: TextField,
} as Meta<typeof TextField>;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
   args: {
   },
};

export const Placeholder: Story = {
   args: {
      placeholder : 'placeholder'
   },
};

