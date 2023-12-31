export default {
    testEnvironment: 'jsdom',
    testMatch: [
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test|tests).[tj]s?(x)',
    ],
    setupFilesAfterEnv: [ '<rootDir>/jest.setup.js' ],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
        "^.+\\.(css|less)$": "<rootDir>/CSSTub.js",
    }
}