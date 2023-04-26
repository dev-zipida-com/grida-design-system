import type { Meta, StoryObj } from '@storybook/react'
import { AiFillHome, AiOutlineInbox, AiOutlineSetting } from 'react-icons/ai'

import Button from '../Button/Button'
import Card from './Card'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: { actions: { argTypesRegex: '^on.*' } },
}

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Header: Story = {
  args: {
    size: 'default',
    bordered: true,
    title: '',
    extra: null,
    cover: null,
    children: null,
    actions: [],
    hoverable: false,
  },
}

/** content */
export const Text: Story = {
  render: (args) => {
    return (
      <Card {...args} style={{ width: 300 }}>
        <span className={'font-pretendard font-normal text-xs text-[rgba(0,0,0,0.38)]'}>
          CAPTION
        </span>
        <span className={'font-pretendard font-medium text-lg text-[rgba(0,0,0,0.87)]'}>
          Card Title
        </span>
        <span className={'font-pretendard font-normal text-sm text-[rgba(0,0,0,0.6)]'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae dictum magna.
          Quisque pulvinar porttitor.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Quisque vitae dictum magna. Quisque pulvinar porttitor.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Quisque vitae dictum magna. Quisque pulvinar porttitor.
        </span>
        <Button style={{ marginTop: 16 }}>Button</Button>
      </Card>
    )
  },
  args: {
    size: 'default',
    bordered: true,
    title: null,
    extra: null,
    cover: null,
    actions: [],
    hoverable: false,
  },
}

/** With Description */
export const Cover: Story = {
  render: (args) => {
    return (
      <Card
        {...args}
        style={{ width: 300 }}
        cover={
          <img
            src="https://fastly.picsum.photos/id/65/4912/3264.jpg?hmac=uq0IxYtPIqRKinGruj45KcPPzxDjQvErcxyS1tn7bG0"
            alt="lorempicsum"
          />
        }
        actions={[
          <div className={'flex flex-col py-3 px-5'} key={'content'}>
            <span className={'font-pretendard font-normal text-xs text-[rgba(0,0,0,0.6)]'}>
              CAPTION
            </span>
            <span className={'font-pretendard font-medium text-lg text-[rgba(0,0,0,0.87)]'}>
              Card Title
            </span>
            <span className={'font-pretendard font-normal text-sm text-[rgba(0,0,0,0.6)]'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae dictum magna.
              Quisque pulvinar porttitor.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Quisque vitae dictum magna. Quisque pulvinar porttitor.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Quisque vitae dictum magna. Quisque pulvinar porttitor.
            </span>
            <Button buttonType="text" style={{ padding: 0, marginTop: 15 }}>
              more +
            </Button>
          </div>,
        ]}
        hoverable={true}
      ></Card>
    )
  },
  args: {
    size: 'default',
    bordered: true,
    title: '',
    extra: null,
    cover: null,
    actions: [],
    hoverable: false,
  },
}

export const Action: Story = {
  render: (args) => {
    return (
      <Card
        {...args}
        style={{ width: 300 }}
        title="New Photo!"
        extra={<a href="#">more</a>}
        cover={
          <img
            src="https://fastly.picsum.photos/id/65/4912/3264.jpg?hmac=uq0IxYtPIqRKinGruj45KcPPzxDjQvErcxyS1tn7bG0"
            alt="lorempicsum"
          />
        }
        actions={[
          <div className={'flex flex-row items-center justify-center py-3'} key={'content'}>
            <div className={'flex-1 flex justify-center items-center border-r border-inline'}>
              <Button buttonType="link">
                <AiFillHome />
              </Button>
            </div>
            <div className={'flex-1 flex justify-center items-center border-r border-inline'}>
              <Button buttonType="link">
                <AiOutlineInbox />
              </Button>
            </div>
            <div className={'flex-1 flex justify-center items-center'}>
              <Button buttonType="link">
                <AiOutlineSetting />
              </Button>
            </div>
          </div>,
        ]}
      ></Card>
    )
  },
  args: {
    size: 'default',
    bordered: true,
    title: '',
    extra: null,
    cover: null,
    actions: [],
    hoverable: false,
  },
}
