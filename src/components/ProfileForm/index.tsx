import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'

import * as S from './styles'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

export type ProfileFormProps = {
  username?: string
  email?: string
}

function ProfileForm() {
  const { data } = useSession()

  return (
    <>
      <Heading lineBottom color="black" size="small">
        My profile
      </Heading>

      <S.Form>
        <TextField
          name="username"
          placeholder="Username"
          label="Username"
          initialValue={data?.user?.name ?? ''}
        />

        <TextField
          name="email"
          placeholder="Enter your e-mail"
          label="E-mail"
          type="email"
          initialValue={data?.user?.email ?? ''}
          readOnly
        />

        <S.ButtonsContainer>
          <S.ResetButtonContainer>
            <Link href={`/forgot-password?email=${data?.user?.email}`}>
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
