type HttpClientParams = {
  route: string
  body: string
  token: string
}

class HttpClient {
  async post({ route, body, token }: HttpClientParams) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${route}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body
    })

    return await response.json()
  }
}

export default new HttpClient()
