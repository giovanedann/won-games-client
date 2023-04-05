import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import ExploreSidebar from '.'
import exploreSidebarMocks from './data.mock'
import styled from 'styled-components'

const Container = styled.div`
  padding: 1.6rem;
  max-width: 32rem;
`

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar
} as Meta<typeof ExploreSidebar>

const Template: StoryFn<typeof ExploreSidebar> = (args) => (
  <Container>
    <ExploreSidebar {...args} />
  </Container>
)

export const Basic = Template.bind({})

Basic.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'won-dark'
  }
}

Basic.args = {
  items: exploreSidebarMocks
}

export const WithInitialValues = Template.bind({})

WithInitialValues.parameters = {
  ...Basic.parameters
}

WithInitialValues.args = {
  ...Basic.args,
  initialValues: { windows: true, sort_by: 'low-to-high' }
}
