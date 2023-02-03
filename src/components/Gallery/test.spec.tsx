import 'match-media-mock'
import { screen } from '@testing-library/react'
import renderWithTheme from 'utils/tests/renderWithTheme'
import Gallery from '.'
import userEvent from '@testing-library/user-event'
import galleryMock from './data.mock'

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img role="button" {...props} />
  }
}))

describe('<Gallery />', () => {
  afterEach(() => {
    jest.clearAllMocks()
    jest.restoreAllMocks()
  })

  it('should render the thumbnails as buttons', async () => {
    renderWithTheme(<Gallery items={galleryMock.slice(0, 2)} />)

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    ).toHaveAttribute('src', galleryMock[0].src)

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 2/i })
    ).toHaveAttribute('src', galleryMock[1].src)
  })

  it('should open and close modal on click', async () => {
    renderWithTheme(<Gallery items={galleryMock.slice(0, 2)} />)

    const modal = screen.getByLabelText('modal')
    const user = userEvent.setup()

    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' })
    expect(modal).toHaveAttribute('aria-hidden', 'true')

    await user.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )

    expect(modal).toHaveAttribute('aria-hidden', 'false')
    expect(modal).toHaveStyle({ opacity: 1 })

    await user.click(screen.getByTitle(/close modal/i))

    expect(modal).toHaveAttribute('aria-hidden', 'true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })

  it('should not close modal on any other key than ESC press', async () => {
    renderWithTheme(<Gallery items={galleryMock.slice(0, 2)} />)

    const modal = screen.getByLabelText('modal')
    const user = userEvent.setup()

    expect(modal).toHaveAttribute('aria-hidden', 'true')

    await user.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )

    expect(modal).toHaveAttribute('aria-hidden', 'false')

    await user.keyboard('[Shift]')

    expect(modal).toHaveAttribute('aria-hidden', 'false')
  })

  it('should close modal on ESC key press', async () => {
    renderWithTheme(<Gallery items={galleryMock.slice(0, 2)} />)

    const modal = screen.getByLabelText('modal')
    const user = userEvent.setup()

    expect(modal).toHaveAttribute('aria-hidden', 'true')

    await user.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )

    expect(modal).toHaveAttribute('aria-hidden', 'false')

    await user.keyboard('[Escape]')
    await user.keyboard('{Shift}{f}{o}{o}{a}{b}')

    expect(modal).toHaveAttribute('aria-hidden', 'true')
  })

  it('should open modal with selected image', async () => {
    renderWithTheme(<Gallery items={galleryMock.slice(0, 2)} />)

    const user = userEvent.setup()

    await user.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 2/i })
    )

    const selectedImg = await screen.findByRole('button', {
      name: /^Gallery Image 2$/i
    })

    const notSelectedImg = screen.queryByRole('button', {
      name: /^Gallery Image 1$/i
    })

    expect(selectedImg).toBeVisible()
    expect(notSelectedImg).not.toBeInTheDocument()
  })
})
