import styled, { css, DefaultTheme } from 'styled-components'
import { rgba } from 'polished'
import media from 'styled-media-query'

import * as CheckboxStyles from 'components/Checkbox/styles'
import * as RadioStyles from 'components/Radio/styles'
import * as HeadingStyles from 'components/Heading/styles'
export const IconWrapper = styled.div`
  cursor: pointer;
  width: 2.4rem;
  height: 2.4rem;
  ${media.greaterThan('medium')`
    display: none;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    flex: 1;
    overflow-y: auto;
    padding: 0 ${theme.spacings.small};
    margin-top: 5.6rem;
    margin-bottom: 2rem;
    transition: transform ${theme.transitions.normal};
    &::-webkit-scrollbar {
      width: 7px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.primary};
      border-radius: 3px;
    }

    ${media.greaterThan('medium')`
      overflow-y: initial;
      padding: 0;
      margin-top: 0;
      margin-bottom: 0;
    `}
  `}
`

export const Overlay = styled.div`
  ${({ theme }) => css`
    transition: opacity ${theme.transitions.normal};
    opacity: 0;
    position: absolute;
  `}
`

export const Items = styled.div`
  ${({ theme }) => css`
    & > div:not(:last-of-type) {
      margin-bottom: ${theme.spacings.xsmall};
    }

    & + div {
      border-top: 0.1rem solid ${rgba(theme.colors.gray[400], 0.2)};
      margin-top: ${theme.spacings.small};
      padding-top: ${theme.spacings.xsmall};
    }
  `}
`

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  ${media.greaterThan('medium')`
    display: none;
  `}

  ${({ theme }) => css`
    padding: ${theme.spacings.small};

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      width: 90%;
      height: 0;
      transform: translateX(5%);
      border-top: 2px solid ${rgba(theme.colors.black, 0.2)};
    }
  `}
`

const wrapperModifiers = {
  open: (theme: DefaultTheme) => css`
    z-index: ${theme.layers.modal};
    position: fixed;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;

    ${Overlay} {
      z-index: ${theme.layers.modal};
      background-color: ${theme.colors.white};
      top: 0;
      left: 0;
      position: fixed;
      width: 100%;
      height: 100vh;
      opacity: 1;
    }

    ${Content} {
      margin-top: ${theme.spacings.medium};
      transform: translateY(0);
      overflow-y: scroll;
    }

    ${Content}, ${Footer}, ${IconWrapper} {
      z-index: ${theme.layers.modal};
    }

    ${HeadingStyles.Wrapper} {
      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.normal};
    }
    ${RadioStyles.Label},
    ${CheckboxStyles.Label} {
      color: ${theme.colors.black};
    }
    ${IconWrapper} {
      color: ${theme.colors.black};
      > svg {
        position: absolute;
        width: 30px;
        right: 0.8rem;
        top: 0.8rem;

        &:first-child {
          display: none;
        }
      }
    }
  `,

  close: (theme: DefaultTheme) => css`
    ${IconWrapper} {
      color: ${theme.colors.white};

      > svg:last-child {
        display: none;
      }
    }

    ${Content} {
      transform: translateY(3rem);
      height: 0;
    }

    ${RadioStyles.Label},
    ${CheckboxStyles.Label} {
      color: ${theme.colors.white} !important;
    }

    ${Content}, ${Footer} {
      visibility: hidden;
      position: absolute;
      left: 0;
    }
  `
}

type WrapperProps = {
  isOpen: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isOpen }) => css`
    ${media.lessThan('medium')`
      ${isOpen && wrapperModifiers.open(theme)}
      ${!isOpen && wrapperModifiers.close(theme)}
    `}
  `}
`
