import { Checkbox } from "@/components/Checkbox";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

const meta: Meta<typeof Checkbox> = {
  title: "Components/CheckBox",
  component: Checkbox,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Checkbox>;

export default meta;

function Render() {
  const [aceite, setAceite] = useState(false);

  return (
    <Checkbox>
      <input
        type="checkbox"
        id="termos"
        checked={aceite}
        onChange={() => setAceite(!aceite)}
      />
      <label htmlFor="termos">
        Li e estou ciente quanto às condições de tratamento dos meus dados
        conforme descrito na <a href="#">Política de Privacidade</a> do banco.
      </label>
    </Checkbox>
  );
}

export const Primary: Story = {
  render: Render,
};
