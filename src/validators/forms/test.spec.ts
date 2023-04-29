import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'
import {
  ForgotPasswordData,
  SignInData,
  forgotPasswordValidation,
  signInValidation,
  signUpValidation
} from '.'

describe('signInValidation', () => {
  it('should return error on missing fields', () => {
    expect(signInValidation({} as SignInData)).toStrictEqual({
      email: '"email" is required',
      password: '"password" is required'
    })
  })

  it('should return error on empty fields', () => {
    const values = { email: '', password: '' }

    expect(signInValidation(values)).toStrictEqual({
      email: '"email" is not allowed to be empty',
      password: '"password" is not allowed to be empty'
    })
  })

  it('should return error on invalid email', () => {
    const values = { email: 'wrong_email', password: '123456' }

    expect(signInValidation(values)).toStrictEqual({
      email: '"email" must be a valid email'
    })
  })
})

describe('signUpValidation', () => {
  it('should return error on missing fields', () => {
    expect(signUpValidation({} as UsersPermissionsRegisterInput)).toStrictEqual(
      {
        email: '"email" is required',
        username: '"username" is required',
        password_confirmation: '"password_confirmation" is required',
        password: '"password" is required'
      }
    )
  })

  it('should return error on empty fields', () => {
    const values = {
      email: '',
      password: '',
      password_confirmation: '',
      username: ''
    }

    console.log({ validation: signUpValidation(values) })

    expect(signUpValidation(values)).toStrictEqual({
      email: '"email" is not allowed to be empty',
      username: '"username" is not allowed to be empty',
      password: '"password" is not allowed to be empty'
    })
  })

  it('should return error on invalid email', () => {
    const values = {
      email: 'wrong_email',
      password: '123',
      password_confirmation: '123',
      username: 'Username'
    }

    expect(signUpValidation(values)).toStrictEqual({
      email: '"email" must be a valid email'
    })
  })

  it('should return error on invalid username length', () => {
    const values = {
      email: 'mail@mail.com',
      password: '123',
      password_confirmation: '123',
      username: 'User'
    }

    expect(signUpValidation(values)).toStrictEqual({
      username: '"username" length must be at least 5 characters long'
    })
  })

  it('should return error if passwords do not match', () => {
    const values = {
      email: 'mail@mail.com',
      password: '123',
      password_confirmation: '1234',
      username: 'Username'
    }

    expect(signUpValidation(values)).toStrictEqual({
      password_confirmation: 'Passwords do not match'
    })
  })
})

describe('forgotPasswordValidation', () => {
  it('should return error on missing fields', () => {
    expect(forgotPasswordValidation({} as ForgotPasswordData)).toStrictEqual({
      email: '"email" is required'
    })
  })

  it('should return error on empty fields', () => {
    const values = { email: '' }

    expect(forgotPasswordValidation(values)).toStrictEqual({
      email: '"email" is not allowed to be empty'
    })
  })

  it('should return error on invalid email', () => {
    const values = { email: 'wrong_email' }

    expect(forgotPasswordValidation(values)).toStrictEqual({
      email: '"email" must be a valid email'
    })
  })
})
