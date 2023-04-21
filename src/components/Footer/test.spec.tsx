import { screen, render } from 'utils/tests/render'

import Footer from '.'

const headings = ['contact', 'follow us', 'links', 'location']

const contact = {
  phone: '+55 99 99999-9999',
  email: 'sac@wongames.com'
}

const socials = [
  { name: 'instagram', link: 'https://www.instagram.com/won-games' },
  { name: 'twitter', link: 'https://www.twitter.com/won-games' },
  { name: 'youtube', link: 'https://www.youtube.com/won-games' },
  { name: 'facebook', link: 'https://www.facebook.com/won-games' }
]

const links = ['home', 'store', 'search']

describe('<Footer />', () => {
  it('should render the right headings', () => {
    render(<Footer />)

    headings.forEach((headingName) => {
      const regExp = new RegExp(headingName, 'i')
      expect(screen.getByText(regExp)).toBeInTheDocument()
    })
  })

  it('should render the right contact info', () => {
    const emailRegExp = new RegExp(contact.email, 'i')
    render(<Footer />)

    expect(screen.getByText(emailRegExp)).toBeInTheDocument()
    expect(screen.getByText(contact.phone)).toBeInTheDocument()
  })

  it('should render all social media links with right links', () => {
    render(<Footer />)

    socials.forEach(({ name, link }) => {
      const regExp = new RegExp(name, 'i')
      expect(screen.getByText(regExp)).toBeInTheDocument()
      expect(screen.getByText(regExp)).toHaveAttribute('href', link)
    })
  })

  it('should render all pagination links', () => {
    render(<Footer />)

    links.forEach((link) => {
      const regExp = new RegExp(link, 'i')
      expect(screen.getByText(regExp)).toBeInTheDocument()
    })
  })
})
