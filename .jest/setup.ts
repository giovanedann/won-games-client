import '@testing-library/jest-dom'
import 'jest-styled-components'
import dotenv from 'dotenv'

global.console = {
  ...console,
  error: jest.fn()
}

dotenv.config({
  path: '.env.development'
})
