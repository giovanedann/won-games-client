import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import Slider, { SliderSettings } from 'components/Slider'
import { AiOutlineClose } from 'react-icons/ai'

import * as S from './styles'
import Image from 'next/image'
import { useState } from 'react'
import theme from 'styles/theme'

export type GalleryImageProps = {
  src: string
  label: string
}

export type GalleryProps = {
  items: GalleryImageProps[]
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
  ],
  nextArrow: <MdArrowForwardIos aria-label="next image" />,
  prevArrow: <MdArrowBackIos aria-label="previous image" />
}

function Gallery({ items }: GalleryProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {items.map((item, index) => (
          <S.ImageContainer key={`thumb-${index}`}>
            <Image
              role="button"
              src={item.src}
              alt={`Thumb - ${item.label}`}
              fill
              style={{ objectFit: 'contain' }}
              onClick={() => setIsModalOpen(true)}
            />
          </S.ImageContainer>
        ))}
      </Slider>

      <S.Modal
        isOpen={isModalOpen}
        aria-label="modal"
        aria-hidden={!isModalOpen}
      >
        <S.CloseButton
          role="button"
          arial-label="close modal"
          color={theme.colors.white}
          onClick={() => setIsModalOpen(false)}
        >
          <AiOutlineClose size={30} title="close modal" />
        </S.CloseButton>
      </S.Modal>
    </S.Wrapper>
  )
}

export default Gallery
