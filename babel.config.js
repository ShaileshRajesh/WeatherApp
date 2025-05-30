module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: 'react-native-dotenv',
        safe: true,
        allowUndefined: false,
      },
    ],
    ['react-native-reanimated/plugin'],
  ],
};
