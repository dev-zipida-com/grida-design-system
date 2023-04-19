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
    count: 1,
  },
}
