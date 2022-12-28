import styled, { css, keyframes } from 'styled-components'
import media from 'styled-media-query'

const hoverAnimation = keyframes`
  from {
    width: 0;
    left: 50%;
  }

  to {
    width: 100%;
    left: 0;
  }
`

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.small} ${theme.spacings.xxsmall};
    position: relative;
  `}
`

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `}
`

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: flex-end;
    gap: ${theme.spacings.xsmall};
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;

    > svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  `}
`

export const MenuNav = styled.div`
  ${({ theme }) => media.greaterThan('medium')`
    margin-left: ${theme.spacings.small}
  `}
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.white};
    margin: 0.3rem ${theme.spacings.small} 0;
    text-decoration: none;
    text-align: center;

    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.primary};
        animation: ${hoverAnimation} 0.2s forwards;
      }
    }
  `}
`

type OpenedMenuProps = { isOpen: boolean }

export const OpenedMenu = styled.nav<OpenedMenuProps>`
  ${({ isOpen, theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.white};
    position: fixed;
    z-index: ${theme.layers.menu};
    inset: 0;
    height: 100vh;
    overflow: hidden;
    opacity: ${isOpen ? 1 : 0};
    transition: opacity 0.3s ease-in-out;
    pointer-events: ${isOpen ? 'all' : 'none'};

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      cursor: pointer;
      width: 3rem;
      height: 3rem;
    }

    ${MenuNav} {
      display: flex;
      flex-direction: column;
      flex: 1;
      align-items: center;
      justify-content: center;
    }

    ${MenuLink} {
      color: ${theme.colors.black};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.small};
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
  `}
`

export const RegisterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};

    > span {
      display: block;
      margin: ${theme.spacings.xxsmall} 0;
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`

export const SignUp = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.primary};
    border-bottom: 0.2rem solid ${theme.colors.primary};
  `}
`
