import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Banner from '.'

export default {
  title: 'Banner',
  component: Banner,
  argTypes: {
    // place your args types here
  }
} as ComponentMeta<typeof Banner>

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />

export const Basic = Template.bind({})
Basic.args = {} // default values for your props
