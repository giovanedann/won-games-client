import { FormEvent, useState } from 'react'
import {
  MdOutlineMail,
  MdErrorOutline,
  MdCheckCircleOutline
} from 'react-icons/md'

import Button from 'components/Button'
import {
  FormLoader,
  FormWrapper,
  FormError,
  FormSuccess
} from 'components/Form'
import TextField from 'components/TextField'

import { ForgotPasswordData, forgotPasswordValidation } from 'validators/forms'
import { useRouter } from 'next/router'

function FormForgotPassword() {
  const { query } = useRouter()

  const [isLoading, setIsLoading] = useState(false)
  const [requestSucceeded, setRequestSucceeded] = useState(false)
  const [formError, setFormError] = useState('')
  const [forgotPasswordValues, setForgotPasswordValues] =
    useState<ForgotPasswordData>({
      email: (query.email as string) ?? ''
    })

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

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(forgotPasswordValues)
      }
    )

    const data = await response.json()

    setIsLoading(false)

    if (data.error) {
      const { message } = data
      const [errorMessage] = message.messages

      setFormError(errorMessage.message)
    } else {
      setRequestSucceeded(true)
    }
  }

  const formErrors = forgotPasswordValidation(forgotPasswordValues)
  const isFormValid = Object.values(formErrors).every((item) => !item)

  return (
    <FormWrapper>
      {requestSucceeded && (
        <FormSuccess>
          <MdCheckCircleOutline size={14} />
          In a couple of minutes, you will receive an e-mail!
        </FormSuccess>
      )}

      {!requestSucceeded && (
        <>
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
              initialValue={forgotPasswordValues.email}
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
              {!isLoading ? 'Send e-mail' : <FormLoader />}
            </Button>
          </form>
        </>
      )}
    </FormWrapper>
  )
}

export default FormForgotPassword
