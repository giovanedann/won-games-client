import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    watchForFileChanges: true,
    baseUrl: 'http://localhost:3000',
    chromeWebSecurity: false
  },
  video: false
})
