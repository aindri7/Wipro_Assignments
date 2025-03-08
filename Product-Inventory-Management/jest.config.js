export default {
    preset: 'jest-preset-angular',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    testMatch: ['**/+(*.)+(spec).+(ts)'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/app/$1',
    },
    transform: {
      '^.+\\.(ts|js|html)$': 'jest-preset-angular',
    },
    collectCoverage: true,
    coverageReporters: ['html', 'text-summary'],
    coverageDirectory: 'coverage',
  };
  