import { Header } from "@/components/Header";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Header> = {
  title: "Layout/Header",
  component: Header,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Header>;

export default meta;

export const Primary: Story = {};
