import { Meta } from '@storybook/react'

import CartButton from '.'

export default {
  title: 'CartButton',
  component: CartButton,
  argTypes: {
    id: {
      type: 'string'
    }
  }
} as Meta<typeof CartButton>

export const Basic = {
  args: {
    id: 'id_123'
  }
}
