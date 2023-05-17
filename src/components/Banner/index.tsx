import Button from 'components/Button'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import { ReactNode } from 'react'
import getImageUrl from 'utils/getImageUrl'
import * as S from './styles'
import Image from 'next/image'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  ribbon?: ReactNode
  ribbonSize?: RibbonSizes
  ribbonColor?: RibbonColors
}

function Banner({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  ribbon,
  ribbonColor,
  ribbonSize
}: BannerProps) {
  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <Image
          src={getImageUrl(img)}
          alt={`banner - ${title}`}
          loader={() => getImageUrl(img)}
          fill
          style={{ objectFit: 'contain' }}
        />
      </S.ImageWrapper>

      <S.Caption>
        <S.Title>{title}</S.Title>
        <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
        <Button as="a" href={buttonLink} size="large">
          {buttonLabel}
        </Button>
      </S.Caption>

      {ribbon && (
        <Ribbon color={ribbonColor} size={ribbonSize}>
          {ribbon}
        </Ribbon>
      )}
    </S.Wrapper>
  )
}

export default Banner
