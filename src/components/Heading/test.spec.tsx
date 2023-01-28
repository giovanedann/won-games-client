import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import renderWithTheme from 'utils/tests/renderWithTheme'
import Heading from '.'

describe('<Heading />', () => {
  it('should render a white text without borders by default', () => {
    renderWithTheme(<Heading>Heading</Heading>)
    const header = screen.getByRole('heading', { level: 2, name: /heading/i })
    expect(header).toHaveStyle({ color: theme.colors.white })
    expect(header).not.toHaveStyleRule('border-bottom')
    expect(header).not.toHaveStyleRule('border-left')
  })

  it('should render a white text when color is white', () => {
    renderWithTheme(<Heading color="white">Heading</Heading>)
    const header = screen.getByRole('heading', { level: 2, name: /heading/i })
    expect(header).toHaveStyle({ color: theme.colors.white })
  })

  it('should render a left line on lineLeft true', () => {
    renderWithTheme(<Heading lineLeft>Heading</Heading>)
    const header = screen.getByRole('heading', { level: 2, name: /heading/i })
    expect(header).toHaveStyle({
      'border-left': `0.7rem solid ${theme.colors.primary}`
    })
  })

  it('should render a bottom line on lineBottom true', () => {
    renderWithTheme(<Heading lineBottom>Heading</Heading>)
    const header = screen.getByRole('heading', { level: 2, name: /heading/i })
    expect(header).toHaveStyleRule(
      'border-bottom',
      `0.7rem solid ${theme.colors.primary}`,
      { modifier: '::after' }
    )
  })

  it('should render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">Heading</Heading>)
    const header = screen.getByRole('heading', { level: 2, name: /heading/i })

    expect(header).toHaveStyle({ 'font-size': theme.font.sizes.medium })
    expect(header).toHaveStyleRule('width', '3rem', { modifier: '::after' })
  })

  it('should render the bottom and left line according to lineColor', () => {
    let header

    const { rerender } = renderWithTheme(
      <Heading lineBottom lineLeft lineColor="primary">
        Heading
      </Heading>
    )
    header = screen.getByRole('heading', { level: 2, name: /heading/i })

    expect(header).toHaveStyleRule(
      'border-bottom',
      `0.7rem solid ${theme.colors.primary}`,
      { modifier: '::after' }
    )
    expect(header).toHaveStyle({
      'border-left': `0.7rem solid ${theme.colors.primary}`
    })

    rerender(
      <Heading lineBottom lineLeft lineColor="secondary">
        Heading
      </Heading>
    )

    header = screen.getByRole('heading', { level: 2, name: /heading/i })

    expect(header).toHaveStyleRule(
      'border-bottom',
      `0.7rem solid ${theme.colors.secondary}`,
      { modifier: '::after' }
    )
    expect(header).toHaveStyle({
      'border-left': `0.7rem solid ${theme.colors.secondary}`
    })
  })

  it('should render a huge heading', () => {
    renderWithTheme(<Heading size="huge">Huge</Heading>)

    expect(
      screen.getByRole('heading', { level: 2, name: /huge/i })
    ).toHaveStyle({
      'font-size': '5.2rem'
    })
  })
})
