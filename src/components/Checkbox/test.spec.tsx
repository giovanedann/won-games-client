import { screen, render } from 'utils/tests/render'
import userEvent from '@testing-library/user-event'
import theme from 'styles/theme'

import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render with a label', () => {
    render(<Checkbox label="My label" labelFor="mycheckbox" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText(/my label/i)).toBeInTheDocument()
    expect(screen.getByText(/my label/i)).toHaveAttribute('for', 'mycheckbox')
  })

  it('should render without a label', () => {
    render(<Checkbox />)

    expect(screen.queryByRole('label')).not.toBeInTheDocument()
  })

  it('should render with a white label by default', () => {
    render(<Checkbox label="My label" labelFor="mycheckbox" />)
    expect(screen.getByText(/my label/i)).toHaveStyle({
      color: theme.colors.white
    })
  })

  it('should render with a black label', () => {
    render(
      <Checkbox label="My label" labelFor="mycheckbox" labelColor="black" />
    )
    expect(screen.getByText(/my label/i)).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should call onCheck on value switch', async () => {
    const user = userEvent.setup()
    const checkHandler = jest.fn()

    render(
      <Checkbox
        label="My label"
        labelFor="mycheckbox"
        labelColor="black"
        onCheck={checkHandler}
      />
    )

    await user.click(screen.getByRole('checkbox'))

    expect(checkHandler).toBeCalled()
    expect(checkHandler).toBeCalledWith(true)
    expect(checkHandler).toBeCalledTimes(1)
  })

  it('should not call onCheck if no onCheck', async () => {
    const user = userEvent.setup()
    const checkHandler = jest.fn()

    render(
      <Checkbox label="My label" labelFor="mycheckbox" labelColor="black" />
    )

    await user.click(screen.getByRole('checkbox'))

    expect(checkHandler).not.toBeCalled()
  })

  it('if isChecked is true, the value should be false', async () => {
    const user = userEvent.setup()
    const checkHandler = jest.fn()

    render(
      <Checkbox
        label="My label"
        labelFor="mycheckbox"
        labelColor="black"
        onCheck={checkHandler}
        isChecked
      />
    )

    await user.click(screen.getByRole('checkbox'))

    expect(checkHandler).toBeCalled()
    expect(checkHandler).toBeCalledWith(false)
  })

  it('should be accessible with tab', async () => {
    const user = userEvent.setup()

    render(
      <Checkbox
        label="My label"
        labelFor="mycheckbox"
        labelColor="black"
        isChecked
      />
    )

    expect(document.body).toHaveFocus()
    await user.tab()
    expect(screen.getByRole('checkbox')).toHaveFocus()
  })
})
