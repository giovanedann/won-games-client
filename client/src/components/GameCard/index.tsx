import Button from 'components/Button'
import { MdAddShoppingCart, MdFavoriteBorder } from 'react-icons/md'
import * as S from './styles'

export type GameCardProps = {
  title: string
  developer: string
  img: string
  price: string
}

function GameCard({ developer, img, price, title }: GameCardProps) {
  return (
    <S.Wrapper>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>

      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Developer>{developer}</S.Developer>
      </S.Info>

      <S.FavButton role="button">
        <MdFavoriteBorder aria-label="add to wishlist" />
      </S.FavButton>

      <S.BuyBox>
        <S.Price>{price}</S.Price>
        <Button icon={<MdAddShoppingCart />} size="small" />
      </S.BuyBox>
    </S.Wrapper>
  )
}

export default GameCard
