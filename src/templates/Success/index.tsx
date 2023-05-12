import Link from 'next/link'

import Base from 'templates/Base'

import { GameCardProps } from 'components/GameCard'
import Showcase from 'components/Showcase'
import { HighlightProps } from 'components/Highlight'

import * as S from './styles'
import Container from 'components/Container'
import { MdDone } from 'react-icons/md'
import useIsMounted from 'hooks/useIsMounted'

export type SuccessTemplateProps = {
  recommendedTitle: string
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

function Success({
  recommendedTitle,
  recommendedGames,
  recommendedHighlight
}: SuccessTemplateProps) {
  const isComponentMounted = useIsMounted()

  if (!isComponentMounted) return null

  return (
    <Base>
      <Container>
        <S.Wrapper>
          <S.Heading>Your purchase was successful!</S.Heading>

          <S.CheckMark>
            <MdDone />
          </S.CheckMark>

          <S.Text>
            Wait for your payment details by email. Your game is now available
            for download inside your{' '}
            <Link href="/profile/orders">orders list.</Link>
          </S.Text>

          <S.Enjoy>Enjoy!</S.Enjoy>
        </S.Wrapper>
      </Container>

      <Showcase
        title={recommendedTitle}
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default Success
