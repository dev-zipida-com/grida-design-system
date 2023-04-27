import type { Meta, StoryObj } from '@storybook/react'

import Popover from './Popover'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    content: 'popover test',
  },
}

export const Title: Story = {
  args: {
    title: 'Title',
    content: 'content example. content example. content example. content example. content example.',
  },
}

export const AlignCenter: Story = {
  args: {
    title: 'Title',
    content: 'content example. content example. content example. content example. content example.',
    align: 'center',
  },
}

export const AlignRight: Story = {
  args: {
    title: 'Title',
    content: 'content example. content example. content example. content example. content example.',
    align: 'right',
  },
}

export const Button: Story = {
  args: {
    title: 'Title',
    children: <button>Click</button>,
  },
}
