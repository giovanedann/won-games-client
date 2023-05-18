import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    watchForFileChanges: true
  },
  video: false
})
