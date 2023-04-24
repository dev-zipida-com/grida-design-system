import type { Meta, StoryObj } from '@storybook/react'

import Slider from './Slider'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const InputValue: Story = {
  args: {
    value: 50,
  },
}

export const Disabled: Story = {
  args: {
    value: 30,
    disabled: true,
  },
}

export const InputNumber: Story = {
  args: {
    value: 10,
    inputNumber: true,
    step: 1,
  },
}

export const Vertical: Story = {
  args: {
    value: 30,
    vertical: true,
  },
}

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
