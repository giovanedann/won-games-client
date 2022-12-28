import Container from 'components/Container'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import Menu from 'components/Menu'

import * as S from './styles'

function Home() {
  return (
    <section>
      <Container>
        <Menu />
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary" color="black">
          News
        </Heading>
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary" color="white">
          Most popular
        </Heading>
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary" color="white">
          Upcoming
        </Heading>
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary" color="white">
          Free games
        </Heading>
      </Container>

      <Container>
        <Footer />
      </Container>
    </section>
  )
}

export default Home
