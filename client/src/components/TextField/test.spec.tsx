import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MdEmail } from 'react-icons/md'
import renderWithTheme from 'utils/tests/renderWithTheme'
import TextField from '.'

describe('<TextField />', () => {
  it('should render the label', () => {
    renderWithTheme(<TextField label="text" labelFor="text" id="text" />)

    expect(screen.getByLabelText(/text/i)).toBeInTheDocument()
  })

  it('should render without the label', () => {
    renderWithTheme(<TextField labelFor="text" id="text" />)

    expect(screen.queryByLabelText(/text/i)).not.toBeInTheDocument()
  })

  it('should render the placeholder', () => {
    renderWithTheme(
      <TextField labelFor="text" id="text" placeholder="jane.doe@mail.com" />
    )

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
        labelFor="text"
        id="text"
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
    renderWithTheme(
      <TextField labelFor="text" id="text" placeholder="jane.doe@mail.com" />
    )

    expect(document.body).toHaveFocus()

    await user.tab()

    expect(screen.getByRole('textbox')).toHaveFocus()
  })

  it('should render with an icon', () => {
    renderWithTheme(
      <TextField
        labelFor="text"
        id="text"
        placeholder="jane.doe@mail.com"
        icon={<MdEmail title="email icon" />}
      />
    )

    expect(screen.getByTitle(/email icon/)).toBeInTheDocument()
    expect(screen.getByTitle(/email icon/).parentElement).toBeInstanceOf(
      SVGElement
    )
  })
})
