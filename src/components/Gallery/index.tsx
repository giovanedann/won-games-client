import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import theme from 'styles/theme'
import { AiOutlineClose } from 'react-icons/ai'
import SlickSlider from 'react-slick'

import Slider from 'components/Slider'
import * as S from './styles'
import { modalSettings, settings } from './data'

export type GalleryImageProps = {
  src: string
  label: string
}

export type GalleryProps = {
  items: GalleryImageProps[]
}

function Gallery({ items }: GalleryProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const sliderRef = useRef<SlickSlider>(null)

  function handleKeyUp({ key }: KeyboardEvent) {
    if (key === 'Escape') {
      setIsModalOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyUp)
    }
  }, [])

  const handleImageClick = useCallback((index: number) => {
    setIsModalOpen(true)
    sliderRef.current!.slickGoTo(index, true)
  }, [])

  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {items.map((item, index) => (
          <S.ImageContainer key={`thumb-${index}`}>
            <Image
              role="button"
              src={item.src}
              alt={`Thumb - ${item.label}`}
              loader={() => item.src}
              fill
              style={{ objectFit: 'contain' }}
              onClick={() => handleImageClick(index)}
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

        <S.Content>
          <Slider ref={sliderRef} settings={modalSettings}>
            {items.map((item, index) => (
              <S.ModalImageContainer key={`thumb-${index}`}>
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  loader={() => item.src}
                />
              </S.ModalImageContainer>
            ))}
          </Slider>
        </S.Content>
      </S.Modal>
    </S.Wrapper>
  )
}

export default Gallery
