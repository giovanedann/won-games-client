import { rest } from 'msw'

type LoginRequestBody = {
  email: string
}

// interceptors for the mocked server of server.ts file
export const handlers = [
  rest.post<LoginRequestBody>(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`,
    async (request, response, context) => {
      const { email } = await request.json<LoginRequestBody>()

      // error case
      if (email === 'false@email.com') {
        return response(
          context.status(400),
          context.json({
            error: 'Bad request',
            message: {
              messages: [{ message: 'This email does not exist' }]
            }
          })
        )
      }

      // success case
      return response(context.status(200), context.json({ ok: true }))
    }
  )
]
