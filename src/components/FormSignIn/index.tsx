/* eslint-disable react/no-unescaped-entities */
import Button from 'components/Button'
import { FormLink, FormLoader, FormWrapper } from 'components/Form'
import TextField from 'components/TextField'
import Link from 'next/link'
import { MdLockOutline, MdOutlineMail } from 'react-icons/md'
import * as S from './styles'
import { FormEvent, useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

type SignInData = { email: string; password: string }

function FormSignIn() {
  const [isLoading, setIsLoading] = useState(false)
  const [signInFormValues, setSignInFormValues] = useState<SignInData>({
    email: '',
    password: ''
  })
  const { push } = useRouter()

  function handleInputChange(field: keyof SignInData, value: string) {
    setSignInFormValues((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  async function handleSubmit(event: FormEvent) {
    setIsLoading(true)
    event.preventDefault()

    const result = await signIn('credentials', {
      ...signInFormValues,
      redirect: false,
      callbackUrl: '/'
    })

    if (result?.url) {
      return push(result?.url as string)
    }

    setIsLoading(false)
  }

  return (
    <FormWrapper>
      <S.Form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="E-mail"
          type="email"
          icon={<MdOutlineMail />}
          onInputChange={(value) => handleInputChange('email', value)}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          icon={<MdLockOutline />}
          onInputChange={(value) => handleInputChange('password', value)}
        />

        <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

        <Button type="submit" size="large" fullWidth disabled={isLoading}>
          {!isLoading ? 'Sign In' : <FormLoader />}
        </Button>

        <FormLink>
          Don't have an account? <Link href="/sign-up">Sign up</Link>
        </FormLink>
      </S.Form>
    </FormWrapper>
  )
}

export default FormSignIn
