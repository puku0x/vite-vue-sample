module.exports = {
  // preset: 'vite-jest',
  // testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  testMatch: ['**/*.spec.ts?(x)'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': 'vue-jest',
  },
};
