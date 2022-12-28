import { screen } from '@testing-library/react'
import renderWithTheme from 'utils/tests/renderWithTheme'
import Home from '.'

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 2, name: /contact/i })
    ).toBeInTheDocument()
  })

  it('should render the right section headings', () => {
    renderWithTheme(<Home />)

    const headings = ['news', 'most popular', 'upcoming', 'free games']

    headings.forEach((heading) => {
      const headingRegExp = new RegExp(heading, 'i')
      expect(
        screen.getByRole('heading', { level: 2, name: headingRegExp })
      ).toBeInTheDocument()
    })
  })
})
