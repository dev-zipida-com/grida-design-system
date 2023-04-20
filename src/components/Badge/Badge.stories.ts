import type { Meta, StoryObj } from '@storybook/react'

import Badge from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    color: '#F26460',
    count: 5,
    dot: false,
    overflowCount: 99,
    showZero: false,
    size: 'default',
  },
}

export const Overflow: Story = {
  args: {
    color: '#F26460',
    count: 100,
    dot: false,
    overflowCount: 99,
    showZero: false,
    size: 'default',
  },
}

export const ShowZero: Story = {
  args: {
    color: '#F26460',
    count: 0,
    dot: false,
    overflowCount: 99,
    showZero: true,
    size: 'default',
  },
}

export const Status: Story = {
  args: {
    color: '#F26460',
    count: 0,
    dot: false,
    overflowCount: 99,
    showZero: true,
    size: 'default',
    status: 'default',
  },
}
