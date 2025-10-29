import { Input } from "@/components/Input";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    required: false,
    disabled: false,
    placeholder: "Digite seu nome completo",
  },
};

type Story = StoryObj<typeof Input>;

export default meta;

export const Primary: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Digite sua senha",
  },
};
