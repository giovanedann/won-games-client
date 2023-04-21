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

export const Basic = {
  render: Template,

  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  },

  args: {
    items: exploreSidebarMocks,
    onFilter: (values: any) => console.log(values) // eslint-disable-line @typescript-eslint/no-explicit-any
  }
}

export const WithInitialValues = {
  render: Template,

  parameters: {
    ...Basic.parameters
  },

  args: {
    ...Basic.args,
    initialValues: { platforms: ['windows', 'linux'], sort_by: 'low-to-high' }
  }
}
