import type { Meta, StoryObj } from '@storybook/react'

import Radio from './Radio'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    autoFocus: false,
    checked: false,
    disabled: false,
    type: 'radio',
    size: 'md',
  },
}

export const WithLabel: Story = {
  args: {
    autoFocus: false,
    checked: false,
    disabled: false,
    type: 'radio',
    children: 'Radio',
    size: 'md',
  },
}

export const Button: Story = {
  args: {
    autoFocus: false,
    checked: false,
    disabled: false,
    type: 'button',
    children: 'Radio',
    size: 'md',
  },
}
