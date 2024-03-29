import Link from 'next/link'
import styled, { css, keyframes } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.white};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    height: 100%;
    margin: ${theme.spacings.xsmall};
  `}
`

const placeholderShimmer = keyframes`
  0% {
    background-position: -40rem 0;
  }

  100% {
    background-position: 40rem 0;
  }
`

export const ImageBox = styled.div`
  height: 14rem;
  width: 100%;
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-size: 80rem 14rem;
  animation: ${placeholderShimmer} 1s linear infinite forwards;
  width: 100%;
  height: 14rem;
  position: relative;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`

export const Info = styled.div`
  max-width: calc(100% - 2.5rem);
  transition: 0.2s ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
    max-width: 95%;
  `}
`

export const Developer = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray};
  `}
`

export const FavButton = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    position: absolute;
    right: -1rem;
    top: -0.5rem;
    cursor: pointer;

    svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  `}
`

export const BuyBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: ${theme.spacings.xxsmall};
  `}
`

type PriceProps = { isPromotional?: boolean }

const priceVariants = {
  default: css`
    color: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => `0 ${theme.spacings.xxsmall}`};
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: ${({ theme }) => theme.border.radius};
    margin-right: ${({ theme }) => `calc(${theme.spacings.xxsmall} / 2)`};
  `,

  promotional: css`
    color: ${({ theme }) => theme.colors.gray[400]};
    text-decoration: line-through;
    margin-right: ${({ theme }) => theme.spacings.xxsmall};
  `
}

export const Price = styled.div<PriceProps>`
  display: inline-flex;
  height: 3rem;
  align-items: center;
  font-weight: ${({ theme }) => theme.font.bold};

  ${({ isPromotional }) => isPromotional && priceVariants.promotional}
  ${({ isPromotional }) => !isPromotional && priceVariants.default}
`

export const StyledNextLink = styled(Link)`
  text-decoration: none;
`
