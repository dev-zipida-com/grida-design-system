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

export const Default: Story = {
  args: {
    options: [
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
    ],
    size: 'medium',
  },
}

export const Disabled: Story = {
  args: {
    options: [
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
    ],
    disabled: true,
  },
}
