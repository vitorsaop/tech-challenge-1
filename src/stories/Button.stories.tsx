import { Button } from "@/components/Button";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Criar conta",
    disabled: false,
  },
};

type Story = StoryObj<typeof Button>;

export default meta;

export const Primary: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
