module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(react-native' +
      '|@react-native' +
      '|@react-navigation' +
      '|@react-native-community' +
      '|expo' +
      '|expo-constants' +
      '|@sentry/react-native' +
      '|@realm/.*' +
      '|@react-native-firebase' +
      '|react-native-drawer-layout' +
      '|react-native-reanimated' +
      ')/)',
  ],
  moduleNameMapper: {
    '^@react-native-community/netinfo$':
      '<rootDir>/__mocks__/@react-native-community/netinfo.js',
    '^@react-native-google-signin/google-signin$':
      '<rootDir>/__mocks__/@react-native-google-signin/google-signin.js',
    '^@react-native-firebase/app$':
      '<rootDir>/__mocks__/@react-native-firebase/app.js',
    '^@react-native-firebase/auth$':
      '<rootDir>/__mocks__/@react-native-firebase/auth.js',
    'require\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  setupFiles: ['<rootDir>/jest.setup.js'],
};
