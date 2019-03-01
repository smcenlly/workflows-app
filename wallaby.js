module.exports = function (wallaby) {

  const jestTransform = file => require('jest-preset-angular/preprocessor').process(file.content, file.path, {globals: {__TRANSFORM_HTML__: true}, rootDir: __dirname});

  return {
    files: [
      'src/**/*.+(ts|html|json|snap|css|less|sass|scss|jpg|jpeg|gif|png|svg)',
      'jest.setup.ts',
      '!src/**/*.spec.ts',
    ],

    tests: ['src/**/*.spec.ts'],

    env: {
      type: 'node',
      runner: 'node'
    },

    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript({module: 'commonjs'}),
      '**/*.html': file => ({code: jestTransform(file), map: {version: 3, sources: [], names: [], mappings: []}, ranges: []})
    },

    preprocessors: {
      'src/**/*.js': [
        jestTransform,
        file => require('@babel/core').transform(file.content, {
          sourceMap: true,
          compact: false,
          filename: file.path,
          presets: [require('babel-preset-jest')]
        })
      ]
    },

    testFramework: 'jest'
  };
};
