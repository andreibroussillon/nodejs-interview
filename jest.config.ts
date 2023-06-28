import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.{ts,ts,js,jsx}', '!src/**/*.d.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/']
};

export default config;
