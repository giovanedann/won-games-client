import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import Image from 'next/image'
import { ReactNode } from 'react'
import * as S from './styles'
import CartButton from 'components/CartButton'
import WishlistButton from 'components/WishlistButton'

export type GameCardProps = {
  id: string
  slug: string
  title: string
  developer: string
  img: string
  price: string
  promotionalPrice?: string
  ribbon?: ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
}

function GameCard({
  id,
  slug,
  developer,
  img,
  price,
  title,
  promotionalPrice,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small'
}: GameCardProps) {
  return (
    <S.Wrapper data-cy="game-card">
      {ribbon && (
        <Ribbon color={ribbonColor} size={ribbonSize}>
          {ribbon}
        </Ribbon>
      )}

      <S.StyledNextLink href={`game/${slug}`}>
        <S.ImageBox>
          <Image fill src={img} alt={title} loader={() => img} />
        </S.ImageBox>
      </S.StyledNextLink>

      <S.Content>
        <S.StyledNextLink href={`game/${slug}`}>
          <S.Info>
            <S.Title>{title}</S.Title>
            <S.Developer>{developer}</S.Developer>
          </S.Info>
        </S.StyledNextLink>

        <S.FavButton role="button" aria-label="favorite button">
          <WishlistButton id={id} />
        </S.FavButton>

        <S.BuyBox>
          {promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
          <S.Price>{promotionalPrice || price}</S.Price>
          <CartButton id={id} size="small" />
        </S.BuyBox>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameCard
