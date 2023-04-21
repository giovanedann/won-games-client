import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import Image from 'next/image'
import { ReactNode } from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import * as S from './styles'
import CartButton from 'components/CartButton'

export type GameCardProps = {
  id: string
  slug: string
  title: string
  developer: string
  img: string
  price: string
  promotionalPrice?: string
  favorite?: boolean
  onFav?: () => void
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
  favorite = false,
  onFav,
  promotionalPrice,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small'
}: GameCardProps) {
  return (
    <S.Wrapper>
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

        <S.FavButton role="button" aria-label="favorite button" onClick={onFav}>
          {favorite ? (
            <MdFavorite aria-label="remove from wishlist" />
          ) : (
            <MdFavoriteBorder aria-label="add to wishlist" />
          )}
        </S.FavButton>

        <S.BuyBox>
          {promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
          <S.Price>{promotionalPrice || price}</S.Price>
          <CartButton id={id} />
        </S.BuyBox>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameCard
