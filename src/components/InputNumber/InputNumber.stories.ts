import type { Meta, StoryObj } from '@storybook/react'

import InputNumber from './InputNumber'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof InputNumber> = {
  title: 'Components/InputNumber',
  component: InputNumber,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const ButtonDisabled: Story = {
  args: {
    max: 10,
    min: 0,
    value: 0,
    step: 4,
  },
}

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
