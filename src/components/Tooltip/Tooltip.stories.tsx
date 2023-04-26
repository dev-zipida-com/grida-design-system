import type { Meta, StoryObj } from '@storybook/react'

import Tooltip from './Tooltip'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    content: 'Top tooltip',
  },
}

export const Button: Story = {
  args: {
    title: 'Tooltip Title',
    content:
      'Tooltips display informative text when users hover over, focus on, or tap an element.',
    isButton: true,
  },
}

export const ChangePlacement: Story = {
  args: {
    title: 'Tooltip Title',
    content:
      'Tooltips display informative text when users hover over, focus on, or tap an element.',
    isButton: true,
    placement: 'left',
  },
}

export const Error: Story = {
  args: {
    title: 'Tooltip Title',
    content:
      'Tooltips display informative text when users hover over, focus on, or tap an element.',
    isButton: true,
    theme: 'error',
  },
}

export const Primary: Story = {
  args: {
    title: 'Tooltip Title',
    content:
      'Tooltips display informative text when users hover over, focus on, or tap an element.',
    isButton: true,
    theme: 'primary',
  },
}
