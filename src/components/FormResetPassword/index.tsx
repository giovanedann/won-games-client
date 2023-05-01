import { MdErrorOutline, MdLockOutline } from 'react-icons/md'
import Button from 'components/Button'
import TextField from 'components/TextField'

import { FormError, FormLoader, FormWrapper } from 'components/Form'
import { FormEvent, useState } from 'react'
import { ResetPasswordData, resetPasswordValidation } from 'validators/forms'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'

function FormResetPassword() {
  const [isLoading, setIsLoading] = useState(false)
  const [formError, setFormError] = useState('')
  const [resetPasswordValues, setResetPasswordValues] =
    useState<ResetPasswordData>({
      password: '',
      password_confirmation: ''
    })

  const { query } = useRouter()

  function handleInputChange(field: keyof ResetPasswordData, value: string) {
    setResetPasswordValues((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setIsLoading(true)

    const body = {
      password: resetPasswordValues.password,
      passwordConfirmation: resetPasswordValues.password_confirmation,
      code: query.code
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }
    )

    const data = await response.json()

    if (data.error) {
      const { message } = data
      const [errorMessage] = message.messages

      setFormError(errorMessage.message)
      setIsLoading(false)
    } else {
      signIn('credentials', {
        email: data.user.email,
        password: resetPasswordValues.password,
        callbackUrl: '/'
      })
    }
  }

  const formErrors = resetPasswordValidation(resetPasswordValues)
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
          name="password"
          placeholder="Password"
          type="password"
          icon={<MdLockOutline />}
          onInputChange={(value) => handleInputChange('password', value)}
          error={formErrors['password']}
        />
        <TextField
          name="confirm-password"
          placeholder="Confirm password"
          type="password"
          icon={<MdLockOutline />}
          onInputChange={(value) =>
            handleInputChange('password_confirmation', value)
          }
          error={formErrors['password_confirmation']}
        />

        <Button
          size="large"
          type="submit"
          fullWidth
          disabled={!isFormValid || isLoading}
        >
          {isLoading ? <FormLoader /> : 'Reset'}
        </Button>
      </form>
    </FormWrapper>
  )
}

export default FormResetPassword
