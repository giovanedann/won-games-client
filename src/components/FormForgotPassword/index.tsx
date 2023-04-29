/* eslint-disable react/no-unescaped-entities */
import Button from 'components/Button'
import { FormLoader, FormWrapper, FormError } from 'components/Form'
import TextField from 'components/TextField'
import { MdOutlineMail, MdErrorOutline } from 'react-icons/md'
import { FormEvent, useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { ForgotPasswordData, forgotPasswordValidation } from 'validators/forms'

function FormForgotPassword() {
  const [isLoading, setIsLoading] = useState(false)
  const [formError, setFormError] = useState('')
  const [forgotPasswordValues, setForgotPasswordValues] =
    useState<ForgotPasswordData>({
      email: ''
    })

  const { push, query } = useRouter()

  function handleInputChange(field: keyof ForgotPasswordData, value: string) {
    setForgotPasswordValues((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  async function handleSubmit(event: FormEvent) {
    setFormError('') // reseting form error
    setIsLoading(true)
    event.preventDefault()

    const result = await signIn('credentials', {
      ...forgotPasswordValues,
      redirect: false,
      callbackUrl: `/${query?.callbackUrl ?? ''}`
    })

    if (result?.url) {
      return push(result?.url as string)
    }

    setIsLoading(false)

    // if code reaches here, means that signIn failed (invalid credentials)
    setFormError('E-mail is invalid')
  }

  const formErrors = forgotPasswordValidation(forgotPasswordValues)
  const isFormValid = Object.values(formErrors).every((item) => !item)

  return (
    <FormWrapper>
      {formError && (
        <FormError>
          <MdErrorOutline /> {formError}
        </FormError>
      )}

      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="E-mail"
          type="email"
          icon={<MdOutlineMail />}
          onInputChange={(value) => handleInputChange('email', value)}
          error={formErrors['email']}
        />
        <Button
          type="submit"
          size="large"
          fullWidth
          disabled={isLoading || !isFormValid}
        >
          {!isLoading ? 'Sign In' : <FormLoader />}
        </Button>
      </form>
    </FormWrapper>
  )
}

export default FormForgotPassword
