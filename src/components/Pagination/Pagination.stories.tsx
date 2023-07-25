import { StoryObj, Meta } from "@storybook/react";
import { Pagination } from "./Pagination";

export default { 
   component: Pagination,
} as Meta<typeof Pagination>;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
   args: {
   },
};
