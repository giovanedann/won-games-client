/* eslint-disable react/no-unescaped-entities */
import Button from 'components/Button'
import { FormLink, FormWrapper } from 'components/Form'
import TextField from 'components/TextField'
import Link from 'next/link'
import { MdLockOutline, MdOutlineMail } from 'react-icons/md'
import * as S from './styles'

function FormSignIn() {
  return (
    <FormWrapper>
      <S.Form>
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

        <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

        <Button size="large" fullWidth>
          Sign In
        </Button>

        <FormLink>
          Don't have an account? <Link href="/sign-up">Sign up</Link>
        </FormLink>
      </S.Form>
    </FormWrapper>
  )
}

export default FormSignIn
