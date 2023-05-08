import Base from 'templates/Base'
import Container from 'components/Container'
import Heading from 'components/Heading'
import GameCard, { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'
import Grid from 'components/Grid'
import Divider from 'components/Divider'
import Empty from 'components/Empty'
import { useWishlist } from 'contexts/wishlist'
import Loader from 'components/Loader'
import { LoaderContainer } from './styles'

export type WishlistTemplateProps = {
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
  recommendedTitle?: string
}

const Wishlist = ({
  recommendedTitle,
  recommendedGames,
  recommendedHighlight
}: WishlistTemplateProps) => {
  const { items, loading } = useWishlist()

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Wishlist
        </Heading>

        {loading && (
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        )}

        {!loading && items.length > 0 && (
          <Grid>
            {items?.map((game) => (
              <GameCard key={`wishlist-${game.title}`} {...game} />
            ))}
          </Grid>
        )}

        {!loading && items.length === 0 && (
          <Empty
            title="Your wishlist is empty"
            description="Games added to your wishlist will appear here"
            hasLink
          />
        )}

        <Divider />
      </Container>

      <Showcase
        title={recommendedTitle ?? 'You may like these games'}
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default Wishlist
