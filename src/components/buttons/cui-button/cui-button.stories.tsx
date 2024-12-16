import type { Meta, StoryObj } from '@storybook/react';

import { CuiButton } from './CuiButton';

const meta: Meta<typeof CuiButton> = {
  component: CuiButton,
  title: "Components/Buttons/CuiButton",
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof CuiButton>;


export const Button: Story = {
  args: {
    text: "My First",
  },
};