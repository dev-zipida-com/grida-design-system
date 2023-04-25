import type { Meta, StoryObj } from '@storybook/react'

import Select from './Select'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

const options = [
  {
    label: 'Item 1',
    value: 'item 1',
  },
  {
    label: 'Item 2',
    value: 'item 2',
  },
  {
    label: 'Item 3',
    value: 'item 3',
  },
]

export const Default: Story = {
  args: {
    options: options,
    size: 'medium',
  },
}

export const Disabled: Story = {
  args: {
    options: options,
    disabled: true,
  },
}

export const Error: Story = {
  args: {
    options: options,
    status: 'error',
  },
}

export const Warning: Story = {
  args: {
    options: options,
    status: 'warning',
  },
}
