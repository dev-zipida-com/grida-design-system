import type { Meta, StoryObj } from '@storybook/react'

import Skeleton from './Skeleton'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    active: true,
    avatar: false,
    loading: true,
    textbox: true,
    title: true,
  },
}

export const WithAvatar: Story = {
  args: {
    active: true,
    avatar: true,
    loading: true,
    textbox: true,
    title: true,
  },
}

export const Button: Story = {
  render: (args) => (
    <Skeleton {...args}>
      <Skeleton.Button />
      <Skeleton.Button block style={{ marginTop: 16 }} />
    </Skeleton>
  ),
  args: {
    active: true,
    avatar: false,
    loading: true,
    textbox: false,
    title: false,
  },
}

export const Image: Story = {
  render: (args) => (
    <Skeleton {...args} style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>
      <Skeleton.Image size="small" />
      <Skeleton.Image />
      <Skeleton.Image size="large" />
      <Skeleton.Image shape="square" size="small" />
      <Skeleton.Image shape="square" />
      <Skeleton.Image shape="square" size="large" />
    </Skeleton>
  ),
  args: {
    active: true,
    avatar: false,
    loading: true,
    textbox: false,
    title: false,
  },
}

export const Input: Story = {
  render: (args) => (
    <Skeleton {...args}>
      <Skeleton.Input size="small" />
      <Skeleton.Input style={{ marginTop: 20 }} />
      <Skeleton.Input size="large" style={{ marginTop: 20 }} />
      <Skeleton.Input block style={{ marginTop: 20 }} />
    </Skeleton>
  ),
  args: {
    active: true,
    avatar: false,
    loading: true,
    textbox: false,
    title: false,
  },
}
