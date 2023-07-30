module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@src': './src',
          '@assets': './src/assets',
          '@appConfig': './app.json',
          '@config': './Config.json',
          '@cards': './src/cards',
          '@common': './src/common',
          '@components': './src/components',
          '@constants': './src/constants',
          '@contexts': './src/contexts',
          '@helpers': './src/helpers',
          '@hooks': './src/hooks',
          '@navigation': './src/navigation',
          '@redux': './src/redux',
          '@reducers': './src/redux/reducers',
          '@screens_components': './src/screens_components',
          '@screens': './src/screens',
          '@skeltons': './src/skeltons',
          '@services': './src/services',
          '@features': './src/services/features',
          '@global': './src/services/global',
        },
      },
    ],
    ['react-native-reanimated/plugin', {relativeSourceLocation: true}],
  ],
};
