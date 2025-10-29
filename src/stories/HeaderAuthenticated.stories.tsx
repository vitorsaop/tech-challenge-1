import { HeaderAuthenticated } from "@/components/HeaderAuthenticated";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof HeaderAuthenticated> = {
  title: "Layout/HeaderAuthenticated",
  component: HeaderAuthenticated,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof HeaderAuthenticated>;

export default meta;

export const Primary: Story = {};
