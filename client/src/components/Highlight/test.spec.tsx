import { screen } from '@testing-library/react'
import renderWithTheme from 'utils/tests/renderWithTheme'
import Highlight from '.'

const props = {
  title: 'Title',
  subtitle: 'Subtitle',
  buttonLabel: 'Buy now',
  backgroundImage: '/img/red-dead-img.jpg',
  buttonLink: '/reddeadredemption2'
}

describe('<Highlight />', () => {
  it('should render the right elements', () => {
    renderWithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { level: 2, name: /title/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 3, name: /subtitle/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
  })
})
