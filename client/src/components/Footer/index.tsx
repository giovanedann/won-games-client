import Heading from 'components/Heading'
import Logo from 'components/Logo'
import Link from 'next/link'
import * as S from './styles'

function Footer() {
  return (
    <S.Wrapper>
      <Logo color="black" />
      <S.Content>
        <S.Column>
          <S.FooterHeading
            color="black"
            size="small"
            lineBottom
            lineColor="secondary"
          >
            Contact
          </S.FooterHeading>
          <a href="mailto:sac@wongames.com">sac@wongames.com</a>
          <a href="tel:99999999999">+55 99 99999-9999</a>
        </S.Column>

        <S.Column>
          <S.FooterHeading
            color="black"
            lineColor="secondary"
            lineBottom
            size="small"
          >
            Follow us
          </S.FooterHeading>

          <nav aria-labelledby="social media">
            <a
              href="https://www.instagram.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.twitter.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://www.youtube.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Youtube
            </a>
            <a
              href="https://www.facebook.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Facebook
            </a>
          </nav>
        </S.Column>

        <S.Column>
          <S.FooterHeading
            color="black"
            lineColor="secondary"
            lineBottom
            size="small"
          >
            Links
          </S.FooterHeading>

          <nav aria-labelledby="footer resources">
            <Link href="/">Home</Link>
            <Link href="/games">Store</Link>
            <Link href="/search">Search</Link>
          </nav>
        </S.Column>

        <S.Column aria-labelledby="footer-contact">
          <S.FooterHeading
            color="black"
            lineColor="secondary"
            lineBottom
            size="small"
          >
            Location
          </S.FooterHeading>
          <span>Somewhere, 000</span>
          <span>North</span>
          <span>New York</span>
        </S.Column>
      </S.Content>

      <S.Copyright>
        Won Games & Giovane Saes 2022 © All rights reserved.
      </S.Copyright>
    </S.Wrapper>
  )
}

export default Footer
