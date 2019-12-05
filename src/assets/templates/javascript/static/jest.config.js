module.exports = {
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  testEnvironment: 'node',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.((sc|c|sa)ss|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
}
