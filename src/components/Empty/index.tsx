import Button from 'components/Button'
import Link from 'next/link'
import * as S from './styles'

type EmptyProps = {
  title: string
  description: string
  hasLink?: boolean
}

function Empty({ description, title, hasLink }: EmptyProps) {
  return (
    <S.Wrapper>
      <S.Image
        src="/img/empty.svg"
        alt="A gamer in a couch playing videogame"
        role="image"
      />

      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>

      {hasLink && (
        <Link href="/" passHref>
          <Button as="a">Go back to store</Button>
        </Link>
      )}
    </S.Wrapper>
  )
}

export default Empty
