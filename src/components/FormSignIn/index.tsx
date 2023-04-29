/* eslint-disable react/no-unescaped-entities */
import Button from 'components/Button'
import { FormLink, FormLoader, FormWrapper, FormError } from 'components/Form'
import TextField from 'components/TextField'
import Link from 'next/link'
import { MdLockOutline, MdOutlineMail, MdErrorOutline } from 'react-icons/md'
import * as S from './styles'
import { FormEvent, useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { signInValidation } from 'validators/forms'

type SignInData = { email: string; password: string }

function FormSignIn() {
  const [isLoading, setIsLoading] = useState(false)
  const [formError, setFormError] = useState('')
  const [signInFormValues, setSignInFormValues] = useState<SignInData>({
    email: '',
    password: ''
  })

  const { push, query } = useRouter()

  function handleInputChange(field: keyof SignInData, value: string) {
    setSignInFormValues((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  async function handleSubmit(event: FormEvent) {
    setFormError('') // reseting form error
    setIsLoading(true)
    event.preventDefault()

    const result = await signIn('credentials', {
      ...signInFormValues,
      redirect: false,
      callbackUrl: `/${query?.callbackUrl ?? ''}`
    })

    if (result?.url) {
      return push(result?.url as string)
    }

    setIsLoading(false)

    // if code reaches here, means that signIn failed (invalid credentials)
    setFormError('Username or password is invalid')
  }

  const formErrors = signInValidation(signInFormValues)
  const isFormValid = Object.values(formErrors).every((item) => !item)

  return (
    <FormWrapper>
      {formError && (
        <FormError>
          <MdErrorOutline /> {formError}
        </FormError>
      )}
      <S.Form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="E-mail"
          type="email"
          icon={<MdOutlineMail />}
          onInputChange={(value) => handleInputChange('email', value)}
          error={formErrors['email']}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          icon={<MdLockOutline />}
          onInputChange={(value) => handleInputChange('password', value)}
          error={formErrors['password']}
        />

        <Link href="/forgot-password">
          <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>
        </Link>

        <Button
          type="submit"
          size="large"
          fullWidth
          disabled={isLoading || !isFormValid}
        >
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
