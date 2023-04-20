import type { Meta, StoryObj } from '@storybook/react'
import { AiFillCheckCircle, AiOutlineCloseSquare } from 'react-icons/ai'

import Tag from './Tag'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    type: 'default',
    text: 'tag-text',
  },
}

export const ImportIcon: Story = {
  args: {
    type: 'success',
    text: 'tag-text',
    icon: <AiFillCheckCircle />,
  },
}

export const ImportClosable: Story = {
  args: {
    type: 'processing',
    text: 'tag-text',
    icon: <AiFillCheckCircle />,
    closable: true,
    closeIcon: <AiOutlineCloseSquare />,
  },
}

export const CustomColor: Story = {
  args: {
    text: 'tag-text',
    icon: <AiFillCheckCircle />,
    closable: true,
    color: '#d844f3',
  },
}
