import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'

import * as S from './styles'

export type ProfileFormProps = {
  username?: string
  email?: string
}

function ProfileForm({ email, username }: ProfileFormProps) {
  return (
    <>
      <Heading lineBottom color="black" size="small">
        My profile
      </Heading>

      <S.Form>
        <TextField
          name="username"
          placeholder="Username"
          label="username"
          initialValue={username}
        />

        <TextField
          name="email"
          placeholder="Enter your e-mail"
          label="E-mail"
          type="email"
          initialValue={email}
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
    </>
  )
}

export default ProfileForm
