const config = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  moduleDirectories: ['node_modules', 'src'],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/**/*.tsx',
    '<rootDir>/**/*.ts',
    '!<rootDir>/**/*.stories.tsx'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}

module.exports = config
