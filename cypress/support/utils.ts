import { faker } from '@faker-js/faker'

export type User = {
  username: string
  email: string
  password: string
}

export function createUser(): User {
  const username = faker.person.fullName()
  const emailStart = username.split(' ').join('').toLowerCase()
  const email = `${emailStart}e2e@wongames.com`
  const password = faker.internet.password()

  return { username, email, password }
}
