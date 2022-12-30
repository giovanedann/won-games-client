import { render, screen } from '@testing-library/react'
import renderWithTheme from 'utils/tests/renderWithTheme'
import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render with a label', () => {
    renderWithTheme(<Checkbox label="My label" labelFor="mycheckbox" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText(/my label/i)).toBeInTheDocument()
    expect(screen.getByText(/my label/i)).toHaveAttribute('for', 'mycheckbox')
  })

  it('should render without a label', () => {
    renderWithTheme(<Checkbox />)

    expect(screen.queryByRole('label')).not.toBeInTheDocument()
  })
})
