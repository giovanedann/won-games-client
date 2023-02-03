import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import { SliderSettings } from 'components/Slider'

export const commonSettings: SliderSettings = {
  infinite: false,
  lazyLoad: 'ondemand',
  arrows: true,
  nextArrow: <MdArrowForwardIos aria-label="next image" />,
  prevArrow: <MdArrowBackIos aria-label="previous image" />
}

export const settings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    }
  ]
}

export const modalSettings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 1
}
