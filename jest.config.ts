import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  clearMocks: true,
  preset: 'ts-jest',
  collectCoverage: true,
  coverageProvider: "v8",
  coverageDirectory: "coverage",
  testMatch: ["<rootDir>/tests/**/*.ts"],
  setupFiles: [
    '<rootDir>/setupTests.ts'
  ],
  testEnvironment: "jest-environment-node",
  watchPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
  ],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ],
};

export default config;
