const esModules = ['lodash-es'].join('|');

module.exports = {
    preset: "jest-preset-angular",
    setupFilesAfterEnv: ["<rootDir>/src/setup-jest.ts"],
    coveragePathIgnorePatterns: [
        "/node_modules/",
        "/__mocks__/",
        "/environments/"
    ],
    collectCoverage: true,
    roots: ['src'],
    globals: {
        "ts-jest": {
            "tsConfigFile": "tsconfig.json"
        },
        "__TRANSFORM_HTML__": true
    },
    transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
    transform: { 
        [`(${esModules}).+\\.js$`]: 'babel-jest',
        '^.+\\.(ts|js)$': 'jest-preset-angular/preprocessor.js',
        '^.+\\.html$': 'jest-preset-angular/preprocessor.js',
    }
};

