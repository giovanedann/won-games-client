import Container from 'components/Container'
import Empty from 'components/Empty'
import Base from 'templates/Base'

export default function NotFound() {
  return (
    <Base>
      <Container>
        <Empty
          title="404 - Not Found"
          description="Ops... Seems like this page doesn't exist."
          hasLink
        />
      </Container>
    </Base>
  )
}
