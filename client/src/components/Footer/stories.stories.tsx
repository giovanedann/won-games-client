import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Footer from '.'

export default {
  title: 'Footer',
  component: Footer,
  argTypes: {}
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />

export const Basic = Template.bind({})
Basic.args = {} // default values for your props
Basic.parameters = {
  backgrounds: {
    default: 'light'
  }
}
