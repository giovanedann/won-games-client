jest.mock('next-auth/react', () => ({
  ...jest.requireActual('next-auth/react'),
  useSession: () => ({
    data: {
      user: {
        email: 'valid@mail.com'
      }
    }
  })
}))
