import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import ExploreSidebar from '.'
import renderWithTheme from 'utils/tests/renderWithTheme'
import exploreSidebarMocks from './data.mock'
import { Overlay } from './styles'
import { css } from 'styled-components'

describe('<ExploreSidebar />', () => {
  it('should render the headings', () => {
    renderWithTheme(
      <ExploreSidebar items={exploreSidebarMocks} onFilter={jest.fn} />
    )

    expect(
      screen.getByRole('heading', { name: /price/i, level: 2 })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /sort by/i, level: 2 })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /system/i, level: 2 })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /genre/i, level: 2 })
    ).toBeInTheDocument()
  })

  it('should render the prices checkboxes', () => {
    renderWithTheme(
      <ExploreSidebar items={exploreSidebarMocks} onFilter={jest.fn} />
    )

    const prices = exploreSidebarMocks.find(({ title }) => title === 'Price')

    prices?.fields.forEach((field) => {
      expect(
        screen.getByRole('checkbox', { name: field.label })
      ).toBeInTheDocument()
    })
  })

  it('should render the sort radios', () => {
    renderWithTheme(
      <ExploreSidebar items={exploreSidebarMocks} onFilter={jest.fn} />
    )

    const sortBy = exploreSidebarMocks.find(({ title }) => title === 'Sort by')

    sortBy?.fields.forEach((field) => {
      expect(
        screen.getByRole('radio', { name: field.label })
      ).toBeInTheDocument()
    })
  })

  it('should render the system checkboxes', () => {
    renderWithTheme(
      <ExploreSidebar items={exploreSidebarMocks} onFilter={jest.fn} />
    )

    const systems = exploreSidebarMocks.find(({ title }) => title === 'System')

    systems?.fields.forEach((field) => {
      expect(
        screen.getByRole('checkbox', { name: field.label })
      ).toBeInTheDocument()
    })
  })

  it('should render the genre checkboxes', () => {
    renderWithTheme(
      <ExploreSidebar items={exploreSidebarMocks} onFilter={jest.fn} />
    )

    const genres = exploreSidebarMocks.find(({ title }) => title === 'Genre')

    genres?.fields.forEach((field) => {
      expect(
        screen.getByRole('checkbox', { name: field.label })
      ).toBeInTheDocument()
    })
  })

  it('should render the filter button', () => {
    renderWithTheme(
      <ExploreSidebar items={exploreSidebarMocks} onFilter={jest.fn} />
    )

    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument()
  })

  it('should start with the initial values', () => {
    renderWithTheme(
      <ExploreSidebar
        items={exploreSidebarMocks}
        onFilter={jest.fn}
        initialValues={{ windows: true, sort_by: 'low-to-high' }}
      />
    )

    expect(screen.getByRole('checkbox', { name: /windows/i })).toBeChecked()
    expect(screen.getByRole('radio', { name: /low to high/i })).toBeChecked()
  })

  it('should call onFilter with the initial values', async () => {
    const user = userEvent.setup()
    const filterHandler = jest.fn()

    renderWithTheme(
      <ExploreSidebar
        items={exploreSidebarMocks}
        onFilter={filterHandler}
        initialValues={{ windows: true, sort_by: 'low-to-high' }}
      />
    )

    await user.click(screen.getByRole('button', { name: /filter/i }))

    expect(filterHandler).toBeCalled()
    expect(filterHandler).toBeCalledTimes(1)
    expect(filterHandler).toBeCalledWith({
      windows: true,
      sort_by: 'low-to-high'
    })
  })

  it('should call onFilter with the checked values', async () => {
    const user = userEvent.setup()
    const filterHandler = jest.fn()

    renderWithTheme(
      <ExploreSidebar items={exploreSidebarMocks} onFilter={filterHandler} />
    )

    await user.click(screen.getByRole('checkbox', { name: /under \$50/i }))
    await user.click(screen.getByRole('radio', { name: /high to low/i }))
    await user.click(screen.getByRole('checkbox', { name: /linux/i }))
    await user.click(screen.getByRole('checkbox', { name: /mmorpg/i }))

    await user.click(screen.getByRole('button', { name: /filter/i }))

    expect(filterHandler).toBeCalled()
    expect(filterHandler).toBeCalledTimes(1)
    expect(filterHandler).toBeCalledWith({
      linux: true,
      sort_by: 'high-to-low',
      mmorpg: true,
      'under-50': true
    })
  })

  it('should check only one of the radios', async () => {
    const user = userEvent.setup()
    renderWithTheme(
      <ExploreSidebar items={exploreSidebarMocks} onFilter={jest.fn} />
    )

    await user.click(screen.getByRole('radio', { name: /high to low/i }))

    expect(screen.getByRole('radio', { name: /high to low/i })).toBeChecked()

    expect(
      screen.getByRole('radio', { name: /low to high/i })
    ).not.toBeChecked()

    await user.click(screen.getByRole('radio', { name: /low to high/i }))

    expect(
      screen.getByRole('radio', { name: /high to low/i })
    ).not.toBeChecked()

    expect(screen.getByRole('radio', { name: /low to high/i })).toBeChecked()
  })

  it('should open and close the sidebar modal on mobile', async () => {
    const user = userEvent.setup()
    const { container } = renderWithTheme(
      <ExploreSidebar items={exploreSidebarMocks} onFilter={jest.fn} />
    )

    const modal = container.firstChild

    const variant = {
      media: '(max-width:768px)',
      modifier: String(css`
        ${Overlay}
      `)
    }

    expect(modal).not.toHaveStyleRule('opacity', '1', variant)

    await user.click(screen.getByLabelText(/open filters menu/i))

    expect(modal).toHaveStyleRule('opacity', '1', variant)

    await user.click(screen.getByLabelText(/close filters menu/i))

    expect(modal).not.toHaveStyleRule('opacity', '1', variant)
  })
})
