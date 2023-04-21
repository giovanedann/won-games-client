import { MdFavoriteBorder } from 'react-icons/md'
import * as S from './styles'

import Button from 'components/Button'
import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'
import CartButton from 'components/CartButton'

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
        <Button icon={<MdFavoriteBorder />} size="large" minimal>
          Wishlist
        </Button>
        <CartButton id={id} hasText size="large" />
      </S.ButtonsWrapper>
    </S.Wrapper>
  )
}

export default GameInfo
