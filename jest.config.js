module.exports = {
  setupTestFrameworkScriptFile: '<rootDir>jestSetup.js',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  testURL: "http://localhost/",
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '\\.(js|jsx)$': 'babel-jest',
    '\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: ['**/*.test.(ts|tsx|js)'],
  globals: {
    'ts-jest': {
      babelConfig: true,
      tsConfig: './jest.tsconfig.json',
    },
  },
};
