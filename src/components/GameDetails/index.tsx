import Heading from 'components/Heading'
import MediaMatch from 'components/MediaMatch'
import { useMemo } from 'react'
import { SiLinux, SiWindows, SiApple } from 'react-icons/si'

import * as S from './styles'

export type Platform = 'linux' | 'windows' | 'mac'

export type GameDetailsProps = {
  platforms: Platform[]
}

const GameDetails = ({ platforms }: GameDetailsProps) => {
  const platformIcons = useMemo(
    () => ({
      linux: <SiLinux title="linux" size={18} />,
      windows: <SiWindows title="windows" size={18} />,
      mac: <SiApple title="mac" size={18} />
    }),
    []
  )

  return (
    <S.Wrapper>
      <MediaMatch greaterThan="small">
        <Heading lineLeft lineColor="secondary">
          Game Details
        </Heading>
      </MediaMatch>

      <S.Content>
        <S.Block>
          <S.Label>Developer</S.Label>
          <S.Description>Gearbox Software</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Release Date</S.Label>
          <S.Description>Nov 16, 2019</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Platforms</S.Label>
          <S.IconsWrapper>
            {platforms.map((platform: Platform) => (
              <S.Icon key={platform}>{platformIcons[platform]}</S.Icon>
            ))}
          </S.IconsWrapper>
        </S.Block>

        <S.Block>
          <S.Label>Publisher</S.Label>
          <S.Description>2K</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Rating</S.Label>
          <S.Description>18+</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Genres</S.Label>
          <S.Description>Action / Adventure</S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameDetails
