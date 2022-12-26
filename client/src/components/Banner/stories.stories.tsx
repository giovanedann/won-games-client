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

Basic.args = {
  img: 'https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/53586680_10157148115137560_7809745321596026880_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=973b4a&_nc_ohc=mu1Xy6YVknEAX-mRTNj&_nc_ht=scontent-gru2-2.xx&oh=00_AfDfBXMX0ha4lPSACdVOwZ9OZorxI7HW6X0kN9fzD3Z-3g&oe=63D13CAF',
  title: 'Hades',
  subtitle: '<p>Can you defeat <strong>Hades</strong> in this journey?</p>',
  buttonLabel: 'Buy now',
  buttonLink: 'https://store.steampowered.com/app/1145360/Hades/'
}
