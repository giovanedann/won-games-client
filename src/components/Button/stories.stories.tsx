import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { Meta } from '@storybook/react'

import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
      control: {
        type: 'text'
      }
    },
    size: {
      type: 'string',
      options: ['small', 'medium', 'large'],
      control: {
        type: 'select'
      }
    },
    fullWidth: {
      type: 'boolean'
    },
    icon: {
      type: 'symbol'
    },
    minimal: {
      type: 'boolean',
      control: {
        type: 'boolean'
      }
    }
  }
} as Meta<typeof Button>

export const Basic = {
  args: {
    children: 'Button',
    size: 'medium',
    fullWidth: false
  }
}

export const WithIcon = {
  args: {
    children: 'With icon',
    size: 'medium',
    icon: <MdOutlineAddShoppingCart />,
    fullWidth: false
  }
}

export const AsLink = {
  args: {
    children: 'As link',
    size: 'medium',
    fullWidth: false,
    as: 'a',
    href: '/link'
  }
}

export const Minimal = {
  args: {
    children: 'Button',
    size: 'medium',
    icon: <MdOutlineAddShoppingCart />,
    fullWidth: false,
    minimal: true
  },

  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
}
