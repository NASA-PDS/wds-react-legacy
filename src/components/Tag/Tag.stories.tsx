import { StoryObj, Meta } from "@storybook/react";
import { Tag } from "./Tag";

export default { 
   component: Tag,
} as Meta<typeof Tag>;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
   args: {
   },
};

export const CustomLabel: Story = {
   args: {
     label: "Another Label"
   },
};