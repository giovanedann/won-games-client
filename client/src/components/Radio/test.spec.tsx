import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import userEvent from '@testing-library/user-event'
import renderWithTheme from 'utils/tests/renderWithTheme'
import Radio from '.'

describe('<Radio />', () => {
  it('should render without label', () => {
    renderWithTheme(<Radio />)

    expect(screen.queryByLabelText(/test radio/i)).not.toBeInTheDocument()
  })

  it('should render the black label by default', () => {
    renderWithTheme(<Radio label="test radio" labelFor="check" value="test" />)

    const label = screen.getByText(/test radio/i)
    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({ color: theme.colors.black })
  })

  it('should render the white label', () => {
    renderWithTheme(
      <Radio
        label="test radio"
        labelFor="check"
        value="test"
        labelColor="white"
      />
    )

    const label = screen.getByText(/test radio/i)
    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({ color: theme.colors.white })
  })

  it('should call onCheck when label status change', async () => {
    const checkHandler = jest.fn()
    const user = userEvent.setup()

    renderWithTheme(
      <Radio
        label="test radio"
        labelFor="check"
        value="test"
        labelColor="white"
        onCheck={checkHandler}
      />
    )

    expect(checkHandler).not.toHaveBeenCalled()

    await user.click(screen.getByLabelText(/test radio/i))

    expect(checkHandler).toBeCalled()
    expect(checkHandler).toBeCalledTimes(1)
    expect(checkHandler).toBeCalledWith('test')
  })

  it('should be accessible with tab', async () => {
    const user = userEvent.setup()

    renderWithTheme(<Radio label="test radio" labelFor="check" />)

    expect(document.body).toHaveFocus()

    await user.tab()

    expect(screen.getByLabelText(/test radio/i)).toHaveFocus()
  })
})
