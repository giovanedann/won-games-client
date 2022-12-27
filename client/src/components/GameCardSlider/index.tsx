/* eslint-disable @typescript-eslint/ban-ts-comment */
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import GameCard, { GameCardProps } from 'components/GameCard'
import Slider, { SliderSettings } from 'components/Slider'

import * as S from './styles'

export type GameCardSliderProps = {
  items: GameCardProps[]
  color?: 'white' | 'black'
}

const settings: SliderSettings = {
  arrows: true,
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1
      }
    }
  ],
  nextArrow: <MdArrowForwardIos aria-label="next games" />,
  prevArrow: <MdArrowBackIos aria-label="previous games" />
}

function GameCardSlider({ items, color = 'black' }: GameCardSliderProps) {
  return (
    <S.Wrapper color={color}>
      <Slider settings={settings}>
        {items.map((item) => (
          <GameCard key={item.title + item.developer} {...item} />
        ))}
      </Slider>
    </S.Wrapper>
  )
}

export default GameCardSlider
