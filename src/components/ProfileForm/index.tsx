import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'

import * as S from './styles'

function ProfileForm() {
  return (
    <S.Wrapper>
      <Heading lineBottom color="black" size="small">
        My profile
      </Heading>

      <S.Form>
        <TextField
          name="name"
          placeholder="Enter your name"
          label="Name"
          initialValue={'John Doe'}
        />

        <TextField
          name="email"
          initialValue={'johndoe@mail.com'}
          placeholder="Enter your e-mail"
          label="E-mail"
          type="email"
        />

        <TextField
          name="password"
          placeholder="Old password"
          label="Password"
          type="password"
        />

        <TextField
          name="new_password"
          placeholder="New password"
          label="New password"
          type="password"
        />

        <Button size="large">Save changes</Button>
      </S.Form>
    </S.Wrapper>
  )
}

export default ProfileForm
