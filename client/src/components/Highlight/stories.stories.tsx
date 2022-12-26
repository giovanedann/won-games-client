import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Highlight from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  argTypes: {}
} as ComponentMeta<typeof Highlight>

const Template: ComponentStory<typeof Highlight> = (args) => (
  <Highlight {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  title: 'Red Dead Redemption 2',
  subtitle: "Come to see John's new adventures!",
  backgroundImage: '/img/red-dead-img.jpg',
  buttonLabel: 'Buy now',
  buttonLink: '/reddeadredemption2'
}
