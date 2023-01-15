import Heading from 'components/Heading'
import Logo from 'components/Logo'
import Link from 'next/link'
import { ReactNode } from 'react'
import * as S from './styles'

type AuthProps = {
  formTitle: string
  children: ReactNode
}

function Auth({ children, formTitle }: AuthProps) {
  return (
    <S.Wrapper>
      <S.BannerBlock>
        <S.BannerContent>
          <Link href="/">
            <Logo id="banner-content" />
          </Link>

          <>
            <Heading color="white" size="huge">
              All your favorite games in one place!
            </Heading>
            <S.Subtitle>
              <strong>WON</strong> is the best and most complete gaming platform
              in the web.
            </S.Subtitle>
          </>

          <S.Footer>
            Won Games & Giovane Saes 2022 © All rights reserved.
          </S.Footer>
        </S.BannerContent>
      </S.BannerBlock>

      <S.Content>
        <S.ContentWrapper>
          <Link href="/">
            <Logo color="black" size="large" id="content" />
          </Link>
          <Heading lineColor="secondary" lineLeft>
            {formTitle}
          </Heading>
          {children}
        </S.ContentWrapper>
      </S.Content>
    </S.Wrapper>
  )
}

export default Auth
