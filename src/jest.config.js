module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  testMatch: ['**/__tests__/**/*.test.(js|jsx)'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
