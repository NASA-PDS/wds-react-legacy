import { StoryObj, Meta } from "@storybook/react";
import { Breadcrumbs } from "./Breadcrumbs";

export default { 
   component: Breadcrumbs,
} as Meta<typeof Breadcrumbs>;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
   args: {
   },
};