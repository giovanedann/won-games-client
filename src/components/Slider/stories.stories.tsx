import React from 'react'
import styled from 'styled-components'
import { StoryFn, Meta } from '@storybook/react'

import Slider from '.'
import { Settings } from 'react-slick'

const FakeSlide = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`

export default {
  title: 'Slider',
  component: Slider
} as Meta<typeof Slider>

const Template: StoryFn<typeof Slider> = (args) => (
  <Slider {...args}>
    {[1, 2, 3, 4, 5, 6].map((number) => (
      <FakeSlide key={number}>{number}</FakeSlide>
    ))}
  </Slider>
)

const horizontalSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
}

export const Horizontal = Template.bind({})

Horizontal.args = {
  settings: { ...horizontalSettings }
}

const verticalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: false,
  slidesToShow: 1
}

export const Vertical = Template.bind({})

Vertical.args = {
  settings: { ...verticalSettings }
}
