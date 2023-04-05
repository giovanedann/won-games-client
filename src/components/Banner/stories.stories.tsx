import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import Banner from '.'
import styled from 'styled-components'

export default {
  title: 'Banner',
  component: Banner,
  argTypes: {
    ribbon: {
      type: 'string'
    }
  }
} as Meta<typeof Banner>

const BannerWrapper = styled.div`
  max-width: 104rem;
  margin: 0 auto;
`

const Template: StoryFn<typeof Banner> = (args) => (
  <BannerWrapper>
    <Banner {...args} />
  </BannerWrapper>
)

export const Basic = Template.bind({})

Basic.args = {
  img: 'https://1.bp.blogspot.com/-yzGDxC63L_4/X3_UhnSwYiI/AAAAAAAABzI/nISlzkfbHz0e64PVl9aA2RCzjQcFFE2kwCLcBGAsYHQ/w1200-h630-p-k-no-nu/H2x1_NSwitchDS_Hades.png',
  title: 'Hades',
  subtitle: '<p>Can you defeat <strong>Hades</strong> in this journey?</p>',
  buttonLabel: 'Buy now',
  buttonLink: 'https://store.steampowered.com/app/1145360/Hades/'
}

Basic.parameters = {
  layout: 'fullscreen'
}

export const WithRibbon = Template.bind({})

WithRibbon.args = {
  img: 'https://1.bp.blogspot.com/-yzGDxC63L_4/X3_UhnSwYiI/AAAAAAAABzI/nISlzkfbHz0e64PVl9aA2RCzjQcFFE2kwCLcBGAsYHQ/w1200-h630-p-k-no-nu/H2x1_NSwitchDS_Hades.png',
  title: 'Hades',
  subtitle: '<p>Can you defeat <strong>Hades</strong> in this journey?</p>',
  buttonLabel: 'Buy now',
  buttonLink: 'https://store.steampowered.com/app/1145360/Hades/',
  ribbon: 'Game of the year',
  ribbonColor: 'secondary',
  ribbonSize: 'normal'
}

WithRibbon.parameters = {
  layout: 'fullscreen'
}
