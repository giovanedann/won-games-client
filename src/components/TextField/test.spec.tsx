import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MdEmail } from 'react-icons/md'
import theme from 'styles/theme'
import renderWithTheme from 'utils/tests/renderWithTheme'
import TextField from '.'

describe('<TextField />', () => {
  it('should render the label', () => {
    renderWithTheme(<TextField label="text" name="text" />)

    expect(screen.getByLabelText(/text/i)).toBeInTheDocument()
  })

  it('should render without the label', () => {
    renderWithTheme(<TextField name="text" />)

    expect(screen.queryByLabelText(/text/i)).not.toBeInTheDocument()
  })

  it('should render the placeholder', () => {
    renderWithTheme(<TextField name="text" placeholder="jane.doe@mail.com" />)

    expect(
      screen.getByPlaceholderText(/jane.doe@mail.com/i)
    ).toBeInTheDocument()
  })

  it('should change the value when typing', async () => {
    const user = userEvent.setup()
    const inputHandler = jest.fn()

    renderWithTheme(
      <TextField
        label="text"
        name="text"
        placeholder="jane.doe@mail.com"
        onInputChange={inputHandler}
      />
    )

    const text = 'typing...'
    await user.type(screen.getByRole('textbox'), text)

    expect(screen.getByRole('textbox')).toHaveValue(text)

    expect(inputHandler).toBeCalled()
    expect(inputHandler).toBeCalledTimes(text.length)
    expect(inputHandler).toBeCalledWith(text)
  })

  it('should be accessible by tab', async () => {
    const user = userEvent.setup()
    renderWithTheme(<TextField name="text" placeholder="jane.doe@mail.com" />)

    expect(document.body).toHaveFocus()

    await user.tab()

    expect(screen.getByRole('textbox')).toHaveFocus()
  })

  it('should render with an icon', () => {
    renderWithTheme(
      <TextField
        name="text"
        placeholder="jane.doe@mail.com"
        icon={<MdEmail title="email icon" />}
      />
    )

    expect(screen.getByTitle(/email icon/)).toBeInTheDocument()
    expect(screen.getByTitle(/email icon/).parentElement).toBeInstanceOf(
      SVGElement
    )
  })

  it('should switch the order of elements based on the iconPosition prop', () => {
    const { rerender } = renderWithTheme(
      <TextField
        name="text"
        placeholder="jane.doe@mail.com"
        icon={<MdEmail title="email icon" />}
        iconPosition="left"
      />
    )

    expect(
      screen.getByTitle(/email icon/).parentElement?.parentElement
    ).toHaveStyle({ order: 0 })

    expect(screen.getByRole('textbox')).toHaveStyle({ order: 1 })

    rerender(
      <TextField
        name="text"
        placeholder="jane.doe@mail.com"
        icon={<MdEmail title="email icon" />}
        iconPosition="right"
      />
    )

    expect(
      screen.getByTitle(/email icon/).parentElement?.parentElement
    ).toHaveStyle({ order: 1 })

    expect(screen.getByRole('textbox')).toHaveStyle({ order: 0 })
  })

  it('should not change the value when typing if disabled', async () => {
    const user = userEvent.setup()
    const inputHandler = jest.fn()

    renderWithTheme(
      <TextField
        label="text"
        name="text"
        placeholder="jane.doe@mail.com"
        onInputChange={inputHandler}
        disabled
      />
    )

    const text = 'typing...'
    await user.type(screen.getByRole('textbox'), text)

    expect(screen.getByRole('textbox')).toBeDisabled()

    expect(inputHandler).not.toBeCalled()
    expect(inputHandler).not.toBeCalledWith(text)
  })

  it('should not be accessible by tab if disabled', async () => {
    const user = userEvent.setup()
    renderWithTheme(
      <TextField name="text" placeholder="jane.doe@mail.com" disabled />
    )

    expect(document.body).toHaveFocus()

    await user.tab()

    expect(document.body).toHaveFocus()
    expect(screen.getByRole('textbox')).not.toHaveFocus()
  })

  it('should render with an error', () => {
    renderWithTheme(
      <TextField
        name="text"
        placeholder="jane.doe@mail.com"
        error="Something got wrong"
      />
    )

    expect(screen.getByText(/something got wrong/i)).toBeInTheDocument()
    expect(screen.getByText(/something got wrong/i)).toHaveStyle({
      color: theme.colors.error
    })
  })
})
