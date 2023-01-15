import Link from 'next/link'
import { MdLockOutline, MdOutlineMail } from 'react-icons/md'
import { FiUserCheck } from 'react-icons/fi'
import Button from 'components/Button'
import TextField from 'components/TextField'

import * as S from './styles'
import { FormLink, FormWrapper } from 'components/Form'

const FormSignUp = () => (
  <FormWrapper>
    <S.Form>
      <TextField
        name="name"
        placeholder="Name"
        type="name"
        icon={<FiUserCheck />}
      />
      <TextField
        name="email"
        placeholder="E-mail"
        type="email"
        icon={<MdOutlineMail />}
      />
      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<MdLockOutline />}
      />
      <TextField
        name="confirm-password"
        placeholder="Confirm password"
        type="password"
        icon={<MdLockOutline />}
      />

      <Button size="large" fullWidth>
        Sign up now
      </Button>

      <FormLink>
        Already have an account? <Link href="/sign-in">Sign in</Link>
      </FormLink>
    </S.Form>
  </FormWrapper>
)

export default FormSignUp
