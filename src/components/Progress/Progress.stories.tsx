import type { Meta, StoryObj } from '@storybook/react'

import Progress from './Progress'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    percent: 30,
  },
}

export const Success: Story = {
  args: {
    percent: 100,
    showInfo: true,
  },
}

export const Error: Story = {
  args: {
    percent: 30,
    status: 'error',
    showInfo: true,
  },
}
