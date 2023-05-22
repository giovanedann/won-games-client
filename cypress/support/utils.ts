import { faker } from '@faker-js/faker'

export type User = {
  username: string
  email: string
  password: string
}

export function createUser(): User {
  const username = faker.person.firstName()
  const email = `${username}e2e@wongames.com`
  const password = faker.internet.password()

  return { username, email, password }
}
