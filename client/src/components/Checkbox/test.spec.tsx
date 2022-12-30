import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import theme from 'styles/theme'
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

  it('should render with a white label by default', () => {
    renderWithTheme(<Checkbox label="My label" labelFor="mycheckbox" />)
    expect(screen.getByText(/my label/i)).toHaveStyle({
      color: theme.colors.white
    })
  })

  it('should render with a black label', () => {
    renderWithTheme(
      <Checkbox label="My label" labelFor="mycheckbox" labelColor="black" />
    )
    expect(screen.getByText(/my label/i)).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should call onCheck on value switch', async () => {
    const user = userEvent.setup()
    const checkHandler = jest.fn()

    renderWithTheme(
      <Checkbox
        label="My label"
        labelFor="mycheckbox"
        labelColor="black"
        onCheck={checkHandler}
      />
    )

    await user.click(screen.getByRole('checkbox'))

    expect(checkHandler).toBeCalled()
    expect(checkHandler).toBeCalledTimes(1)
  })

  it('should not call onCheck if no onCheck', async () => {
    const user = userEvent.setup()
    const checkHandler = jest.fn()

    renderWithTheme(
      <Checkbox label="My label" labelFor="mycheckbox" labelColor="black" />
    )

    await user.click(screen.getByRole('checkbox'))

    expect(checkHandler).not.toBeCalled()
  })
})
