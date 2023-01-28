const config = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  moduleDirectories: ['node_modules', '<rootDir>/src', '<rootDir>/.jest'],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/**/*.tsx',
    '<rootDir>/**/*.ts',
    '!<rootDir>/**/*.stories.tsx',
    '!<rootDir>/src/pages/**/*.tsx',
    '!<rootDir>/src/types/**/*.d.ts',
    '!<rootDir>/*.d.ts',
    '!<rootDir>/src/styles/**/*.ts'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}

module.exports = config
