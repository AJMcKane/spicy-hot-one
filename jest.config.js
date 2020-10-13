module.exports = {
  roots: [
    "<rootDir>/src"
  ],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  transform: {
    '^.+\\.(js|jsx|mjs)$': 'babel-jest',
    "^.+\\.(ts|tsx)$": "ts-jest",
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|css|json)$)': '<rootDir>/config/jest/fileTransform.js',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest",
    "^store(.*)$": "<rootDir>/src/store$1",
    "^config(.*)$": "<rootDir>/src/config$1",
    "^models(.*)$": "<rootDir>/src/common/models$1",
    "^types(.*)$": "<rootDir>/src/common/types$1",
    "^components(.*)$": "<rootDir>/src/components$1",
    "^handlers(.*)$": "<rootDir>/src/common/handlers$1",
  },
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupJest.js'],
  verbose: false,
}

