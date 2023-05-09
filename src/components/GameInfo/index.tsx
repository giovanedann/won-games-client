import * as S from './styles'

import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'
import CartButton from 'components/CartButton'
import WishlistButton from 'components/WishlistButton'

export type GameInfoProps = {
  id: string
  title: string
  description: string
  price: string
}

function GameInfo({ id, description, price, title }: GameInfoProps) {
  return (
    <S.Wrapper>
      <Heading color="black" lineBottom>
        {title}
      </Heading>

      <Ribbon color="secondary">{`${price}`}</Ribbon>

      <S.Description>{description}</S.Description>

      <S.ButtonsWrapper>
        <WishlistButton id={id} hasText size="large" />
        <CartButton id={id} hasText size="large" />
      </S.ButtonsWrapper>
    </S.Wrapper>
  )
}

export default GameInfo
