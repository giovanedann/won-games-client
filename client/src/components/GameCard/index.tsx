import Button from 'components/Button'
import { MdAddShoppingCart, MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import * as S from './styles'

export type GameCardProps = {
  title: string
  developer: string
  img: string
  price: string
  promotionalPrice?: string
  favorite?: boolean
  onFav?: () => void
}

function GameCard({
  developer,
  img,
  price,
  title,
  favorite = false,
  onFav,
  promotionalPrice
}: GameCardProps) {
  return (
    <S.Wrapper>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>

      <S.Content>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>

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
          <Button icon={<MdAddShoppingCart />} size="small" />
        </S.BuyBox>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameCard
