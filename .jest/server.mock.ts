import { server } from '../src/utils/tests/server'

global.fetch = require('node-fetch')
global.Request = require('node-fetch').Request
global.Response = require('node-fetch').Response

beforeAll(() => {
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})
