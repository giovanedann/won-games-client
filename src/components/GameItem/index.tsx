import Image from 'next/image'
import { HiDownload } from 'react-icons/hi'

import * as S from './styles'

export type GameItemProps = {
  img: string
  title: string
  price: string
  downloadLink?: string
}

const GameItem = ({ img, title, price, downloadLink }: GameItemProps) => (
  <S.Wrapper>
    <S.GameContent>
      <S.ImageBox>
        <Image src={img} alt={title} fill style={{ objectFit: 'cover' }} />
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
        <S.Price>{price}</S.Price>
      </S.Content>
    </S.GameContent>
  </S.Wrapper>
)

export default GameItem
