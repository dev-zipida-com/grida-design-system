import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    block: false,
    danger: false,
    disabled: false,
    htmlType: 'button',
    buttonType: 'default',
    shape: 'default',
    size: 'middle',
  },
}

export const Primary: Story = {
  args: {
    block: false,
    danger: false,
    disabled: false,
    htmlType: 'button',
    buttonType: 'primary',
    shape: 'default',
    size: 'middle',
  },
}

export const Outline: Story = {
  args: {
    block: false,
    danger: false,
    disabled: false,
    htmlType: 'button',
    buttonType: 'outline',
    shape: 'default',
    size: 'middle',
  },
}

export const Dashed: Story = {
  args: {
    block: false,
    danger: false,
    disabled: false,
    htmlType: 'button',
    buttonType: 'dashed',
    shape: 'default',
    size: 'middle',
  },
}

export const Text: Story = {
  args: {
    block: false,
    danger: false,
    disabled: false,
    htmlType: 'button',
    buttonType: 'text',
    shape: 'default',
    size: 'middle',
  },
}

export const Link: Story = {
  args: {
    block: false,
    danger: false,
    disabled: false,
    htmlType: 'button',
    buttonType: 'link',
    shape: 'default',
    size: 'middle',
  },
}
