import '@testing-library/jest-dom'
import 'jest-styled-components'

global.console = {
  ...console,
  error: jest.fn()
}