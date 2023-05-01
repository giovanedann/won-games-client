import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'

import * as S from './styles'
import Link from 'next/link'

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

        <S.ButtonsContainer>
          <S.ResetButtonContainer>
            <Link href={`/forgot-password?email=${email}`}>
              <Button minimal size="large">
                Reset password
              </Button>
            </Link>
          </S.ResetButtonContainer>

          <Button size="large">Save changes</Button>
        </S.ButtonsContainer>
      </S.Form>
    </>
  )
}

export default ProfileForm
