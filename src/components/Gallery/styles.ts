import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    .slick-prev,
    .slick-next {
      display: block;
      color: ${theme.colors.white};
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
      transform: translate(0, -50%);
    }

    .slick-prev {
      left: -${theme.spacings.xxlarge};
    }

    .slick-next {
      right: -${theme.spacings.xxlarge};
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }

    .slick-slide > div {
      margin: 0 ${theme.spacings.xsmall};
      cursor: pointer;
    }

    .slick-list {
      margin: 0 -${theme.spacings.xsmall};
    }

    ${media.lessThan('huge')`
      overflow-x: hidden;
    `}
  `}
`

export const ImageContainer = styled.div`
  width: 29rem;
  height: 16.3rem;
  position: relative;
`

type ModalProps = {
  isOpen: boolean
}

const modalVariants = {
  open: css`
    opacity: 1;
  `,

  close: css`
    opacity: 0;
    pointer-events: none;
  `
}

export const Modal = styled.div<ModalProps>`
  transition: all 0.3s ease-in-out;
  width: 100px;
  height: 100px;
  background: red;

  ${({ isOpen }) => css`
    ${isOpen && modalVariants.open}
    ${!isOpen && modalVariants.close}
  `}
`
