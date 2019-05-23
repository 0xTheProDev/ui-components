module.exports = {
  setupTestFrameworkScriptFile: '<rootDir>jestSetup.js',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  testURL: "http://localhost/",
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/fileMock.ts"
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
