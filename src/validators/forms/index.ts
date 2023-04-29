import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'
import Joi from 'joi'

type FieldErrors = {
  [key: string]: string
}

// Joi schema for validation
const fieldsValidations = {
  username: Joi.string().min(5).required(),
  email: Joi.string().email({ tlds: false }).required(),
  password: Joi.string().required(),
  password_confirmation: Joi.string()
    .required()
    .valid(Joi.ref('password'))
    .messages({ 'any.only': 'Passwords do not match' })
}

// Function to return an object of errors
function getFieldErrors(errorObj: Joi.ValidationResult) {
  const errors: FieldErrors = {}

  if (errorObj.error) {
    errorObj.error.details.forEach((error) => {
      errors[error.path.join('.')] = error.message
    })
  }

  return errors
}

// Function to validate the sign up schema
export function signUpValidation(values: UsersPermissionsRegisterInput) {
  const schema = Joi.object(fieldsValidations)

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

// Type to store the fields of Sign in form
export type SignInData = Omit<UsersPermissionsRegisterInput, 'username'>

// Function to validate the sign in schema
export function signInValidation(values: SignInData) {
  const { email, password } = fieldsValidations
  const schema = Joi.object({ email, password })

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

// Type to store the fields of Sign in form
export type ForgotPasswordData = { email: string }

// Function to validate the sign in schema
export function forgotPasswordValidation(values: ForgotPasswordData) {
  const { email } = fieldsValidations
  const schema = Joi.object({ email })

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}
