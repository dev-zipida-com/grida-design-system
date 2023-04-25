import type { Meta, StoryObj } from '@storybook/react'
import { AiFillHome } from 'react-icons/ai'

import Breadcrumb from './Breadcrumb'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    items: [
      {
        url: '#',
        name: 'Home',
      },
      {
        url: '#',
        name: 'Page1',
      },
      {
        url: '#',
        name: 'Page2',
      },
    ],
    separator: '/',
  },
}

export const WithIcon: Story = {
  args: {
    items: [
      {
        url: '#',
        name: 'Home',
        icon: <AiFillHome />,
      },
      {
        url: '#',
        name: 'Page1',
      },
      {
        url: '#',
        name: 'Page2',
      },
    ],
    separator: '/',
  },
}
