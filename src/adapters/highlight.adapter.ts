import { QueryHome_sections_newGames_highlight } from 'graphql/generated/QueryHome'
import getImageUrl from 'utils/getImageUrl'

export default function highlightAdapter(
  apiHighlight: QueryHome_sections_newGames_highlight | null | undefined
) {
  if (!apiHighlight) return null

  return {
    title: apiHighlight.title,
    subtitle: apiHighlight.subtitle,
    backgroundImage: apiHighlight.background?.url
      ? getImageUrl(
          apiHighlight.background?.url ||
            '/uploads/No_image_available_38adfae762.png'
        )
      : null,
    floatImage: apiHighlight.floatImage?.url
      ? getImageUrl(apiHighlight.floatImage?.url ?? '')
      : null,
    buttonLabel: apiHighlight.buttonLabel,
    buttonLink: apiHighlight.buttonLink,
    alignment: apiHighlight.alignment
  }
}
