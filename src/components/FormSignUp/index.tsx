import Link from 'next/link'
import { MdLockOutline, MdOutlineMail } from 'react-icons/md'
import { FiUserCheck } from 'react-icons/fi'
import Button from 'components/Button'
import TextField from 'components/TextField'

import * as S from './styles'
import { FormLink, FormLoader, FormWrapper } from 'components/Form'
import { FormEvent, useState } from 'react'
import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'
import { useMutation } from '@apollo/client'
import { MUTATION_REGISTER } from 'graphql/mutations/register'
import { signIn } from 'next-auth/react'
import { signUpValidation } from 'validators/forms'

type SignUpData = UsersPermissionsRegisterInput & {
  password_confirmation: string
}

const FormSignUp = () => {
  const [signUpFormValues, setSignUpFormValues] = useState<SignUpData>({
    email: '',
    password: '',
    username: '',
    password_confirmation: ''
  })

  const [createUser, { error, loading }] = useMutation(MUTATION_REGISTER, {
    onCompleted: () => {
      !error &&
        signIn('credentials', {
          email: signUpFormValues.email,
          password: signUpFormValues.password,
          callbackUrl: '/'
        })
    }
  })

  function handleInputChange(field: keyof SignUpData, value: string) {
    setSignUpFormValues((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    createUser({
      variables: {
        input: {
          ...signUpFormValues
        }
      }
    })
  }

  const formErrors = signUpValidation(signUpFormValues)
  const isFormValid = Object.values(formErrors).every((item) => !item)

  return (
    <FormWrapper>
      <S.Form onSubmit={handleSubmit}>
        <TextField
          name="username"
          placeholder="Username"
          type="text"
          icon={<FiUserCheck />}
          onInputChange={(value) => handleInputChange('username', value)}
          error={formErrors['username']}
        />
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
          disabled={loading || !isFormValid}
        >
          {!loading ? 'Sign Up' : <FormLoader />}
        </Button>

        <FormLink>
          Already have an account? <Link href="/sign-in">Sign in</Link>
        </FormLink>
      </S.Form>
    </FormWrapper>
  )
}

export default FormSignUp
