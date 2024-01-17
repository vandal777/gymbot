/** @type {import('jest').Config} */
const config = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>jestSetupFile.js'],
};

module.exports = config;
