import type { Meta, StoryObj } from '@storybook/react'

import Popconfirm from './Popconfirm'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Popconfirm> = {
  title: 'Components/Popconfirm',
  component: Popconfirm,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    title: 'Delete this task?',
    onCancel: () => {
      // eslint-disable-next-line no-alert
      alert('cancel click') // 테스트용
    },
    onConfirm: () => {
      // eslint-disable-next-line no-alert
      alert('confirm click') // 테스트용
    },
  },
}

export const Success: Story = {
  args: {
    title: 'Delete this task?',
    state: 'success',
  },
}

export const Error: Story = {
  args: {
    title: 'Delete this task?',
    state: 'error',
  },
}

export const Info: Story = {
  args: {
    title: 'Delete this task?',
    state: 'info',
  },
}

export const NotCancel: Story = {
  args: {
    title: 'Delete this task?',
    showCancel: false,
  },
}
