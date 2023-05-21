import Heading from 'components/Heading'
import MediaMatch from 'components/MediaMatch'
import { useMemo } from 'react'
import { SiLinux, SiWindows, SiApple } from 'react-icons/si'

import * as S from './styles'

export type Platform = 'linux' | 'windows' | 'mac'

type Rating = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18'

export type GameDetailsProps = {
  platforms: Platform[]
  rating: Rating
  developer: string
  publisher: string
  genres: string[]
  releaseDate: string
}

const GameDetails = ({
  platforms,
  developer,
  genres,
  rating,
  releaseDate
}: GameDetailsProps) => {
  const platformIcons = useMemo(
    () => ({
      linux: <SiLinux title="linux" size={18} />,
      windows: <SiWindows title="windows" size={18} />,
      mac: <SiApple title="mac" size={18} />
    }),
    []
  )

  const formattedDate = useMemo(() => {
    if (!releaseDate) return

    return new Intl.DateTimeFormat('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }).format(new Date(releaseDate))
  }, [releaseDate])

  return (
    <S.Wrapper data-cy="game-details">
      <MediaMatch greaterThan="small">
        <Heading lineLeft lineColor="secondary">
          Game Details
        </Heading>
      </MediaMatch>

      <S.Content>
        <S.Block>
          <S.Label>Developer</S.Label>
          <S.Description>{developer}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Release Date</S.Label>
          <S.Description>{formattedDate}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Platforms</S.Label>
          <S.IconsWrapper>
            {platforms?.map((platform: Platform) => (
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
          <S.Description>
            {rating === 'BR0' ? 'FREE' : `${rating?.replace('BR', '')}+`}
          </S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Genres</S.Label>
          <S.Description>{genres?.join(' / ')}</S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameDetails
