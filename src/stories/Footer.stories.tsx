import { Footer } from "@/components/Footer";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Footer> = {
  title: "Layout/Footer",
  component: Footer,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Footer>;

export default meta;

export const Primary: Story = {};
