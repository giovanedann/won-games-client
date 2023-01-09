import Heading from 'components/Heading'
import Logo from 'components/Logo'
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
        <Logo />
        <Heading>All your favorite games in one place!</Heading>
        <S.Subtitle>
          <strong>WON</strong> is the best and most complete gaming platform in
          the web.
        </S.Subtitle>
        <S.Footer>
          Won Games & Giovane Saes 2022 © All rights reserved.
        </S.Footer>
      </S.BannerBlock>

      <S.Content>
        <Logo color="black" size="large" />
        <Heading color="black" lineColor="secondary" lineLeft>
          {formTitle}
        </Heading>
        {children}
      </S.Content>
    </S.Wrapper>
  )
}

export default Auth
