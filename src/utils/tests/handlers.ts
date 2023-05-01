import { rest } from 'msw'

type LoginRequestBody = {
  email: string
}

type ResetRequestBody = {
  code: string
  password: string
  passwordConfirmation: string
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
  ),
  rest.post<ResetRequestBody>(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`,
    async (request, response, context) => {
      const { code } = await request.json()

      if (code === 'wrong_code') {
        return response(
          context.status(400),
          context.json({
            error: 'Bad Request',
            message: {
              messages: [
                {
                  message: 'Incorrect code provided.'
                }
              ]
            }
          })
        )
      }

      return response(
        context.status(200),
        context.json({
          user: {
            email: 'valid@email.com'
          }
        })
      )
    }
  )
]
