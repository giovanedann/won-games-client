import Image from 'next/image'
import { HiDownload } from 'react-icons/hi'

import * as S from './styles'
import { useCart } from 'contexts/cart'

export type PaymentInfoProps = {
  number: string
  flag: string
  img: string
  purchaseDate: string
}

export type GameItemProps = {
  id: string
  img: string
  title: string
  price: string
  downloadLink?: string
  paymentInfo?: PaymentInfoProps
}

const GameItem = ({
  id,
  img,
  title,
  price,
  downloadLink,
  paymentInfo
}: GameItemProps) => {
  const { isItemInCart, removeFromCart } = useCart()

  return (
    <S.Wrapper data-cy="game-item">
      <S.GameContent>
        <S.ImageBox>
          <Image
            src={img}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            loader={() => img}
          />
        </S.ImageBox>

        <S.Content>
          <S.Title>
            {title}
            {downloadLink && (
              <S.DownloadLink
                href={downloadLink}
                target="_blank"
                aria-label={`Get ${title} here`}
              >
                <HiDownload size={22} title="download icon" />
              </S.DownloadLink>
            )}
          </S.Title>
          <S.Group>
            <S.Price>{price}</S.Price>
            {isItemInCart(id) && (
              <S.Remove onClick={() => removeFromCart(id)}>Remove</S.Remove>
            )}
          </S.Group>
        </S.Content>
      </S.GameContent>

      {!!paymentInfo && (
        <S.PaymentContent>
          <p>{paymentInfo.purchaseDate}</p>
          <S.CardInfo>
            <span>{paymentInfo.number}</span>
            {paymentInfo.img && (
              <S.PaymentCardImageBox>
                <Image
                  src={paymentInfo.img}
                  alt={paymentInfo.flag}
                  fill
                  loader={() => paymentInfo.img}
                />
              </S.PaymentCardImageBox>
            )}
          </S.CardInfo>
        </S.PaymentContent>
      )}
    </S.Wrapper>
  )
}

export default GameItem
