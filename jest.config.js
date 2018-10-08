module.exports = {
  setupTestFrameworkScriptFile: '<rootDir>jestSetup.js',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest/preprocessor.js',
  },
  testMatch: ['**/*.test.(ts|tsx|js)'],
};
