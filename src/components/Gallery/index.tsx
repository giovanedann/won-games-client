import { useEffect, useState } from 'react'
import Image from 'next/image'
import theme from 'styles/theme'
import { AiOutlineClose } from 'react-icons/ai'

import Slider from 'components/Slider'
import * as S from './styles'
import { settings } from './data'

export type GalleryImageProps = {
  src: string
  label: string
}

export type GalleryProps = {
  items: GalleryImageProps[]
}

function Gallery({ items }: GalleryProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

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
