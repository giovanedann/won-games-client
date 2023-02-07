import WishlistTemplate, { WishlistTemplateProps } from 'templates/Wishlist'

import gamesMock from 'components/GameCardSlider/data.mock'
import highlightMock from 'components/Highlight/data.mock'

export default function Wishlist(props: WishlistTemplateProps) {
  return <WishlistTemplate {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      recommendedGames: gamesMock,
      recommendedHighlight: highlightMock
    }
  }
}
