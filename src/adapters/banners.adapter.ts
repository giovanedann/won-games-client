import { BannerProps } from 'components/Banner'
import { QueryHome_banners } from 'graphql/generated/QueryHome'

export default function BannerAdapter(
  apiBanners: QueryHome_banners[]
): BannerProps[] {
  return apiBanners.map((banner) => ({
    img: banner.image?.url ?? '',
    title: banner.title,
    subtitle: banner.subtitle,
    buttonLabel: banner.button?.label ?? 'Default',
    buttonLink: banner.button?.link ?? 'http://localhost:3000/',
    ribbon: banner.ribbon?.text ?? 'Default',
    ribbonColor: banner.ribbon?.color ?? 'primary',
    ribbonSize: banner.ribbon?.size ?? 'normal'
  }))
}
