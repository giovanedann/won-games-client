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
  ${({ theme, isOpen }) => css`
    position: fixed;
    width: 100%;
    height: 100%;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: ${theme.layers.modal};
    transition: opacity ${theme.transitions.normal};
    ${isOpen && modalVariants.open};
    ${!isOpen && modalVariants.close};
  `}
`

export const CloseButton = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    cursor: pointer;
    width: 100%;
    height: 100%;
    text-align: right;
  `}
`

export const Content = styled.div`
  width: 120rem;
  height: 70rem;

  ${media.lessThan('medium')`
    width: 100%;
    height: 20rem;
  `}
`

export const ModalImageContainer = styled.div`
  width: 120rem;
  height: 70rem;
  position: relative;

  ${media.lessThan('medium')`
    width: 100%;
    height: 20rem;
  `}
`
