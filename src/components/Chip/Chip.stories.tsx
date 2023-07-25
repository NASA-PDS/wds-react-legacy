import { StoryObj, Meta } from "@storybook/react";
import { Chip } from "./Chip";

export default { 
   component: Chip,
} as Meta<typeof Chip>;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
   args: {
   },
};

export const CustomLabel: Story = {
   args: {
     label: "Another Label"
   },
};