import { MdLockOutline } from 'react-icons/md'
import Button from 'components/Button'
import TextField from 'components/TextField'

import { FormWrapper } from 'components/Form'
import { FormEvent, useState } from 'react'
import { ResetPasswordData, resetPasswordValidation } from 'validators/forms'

function FormResetPassword() {
  const [resetPasswordValues, setResetPasswordValues] =
    useState<ResetPasswordData>({
      password: '',
      password_confirmation: ''
    })

  function handleInputChange(field: keyof ResetPasswordData, value: string) {
    setResetPasswordValues((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }

  const formErrors = resetPasswordValidation(resetPasswordValues)
  const isFormValid = Object.values(formErrors).every((item) => !item)

  return (
    <FormWrapper>
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

        <Button size="large" type="submit" fullWidth disabled={!isFormValid}>
          {'Reset'}
        </Button>
      </form>
    </FormWrapper>
  )
}

export default FormResetPassword
