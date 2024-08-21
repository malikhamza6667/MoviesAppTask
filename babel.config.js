module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        alias: {
          '@src': './src',
          '@commons': './src/commons/*',
          '@components': './src/components',
          '@configs': './src/configs/index.tsx',
          '@contexts': './src/contexts/index.tsx',
          '@screens': './src/screens/index.tsx',
          '@utils': './src/utils/index.tsx',
          '@assets': './src/assets/index.tsx',
          '@constants': './src/constants/index.tsx',
          "@routes":"./src/routes/index.tsx"       ,
          "@layouts":"./src/layouts/index.tsx"  ,
          "@hooks":"./src/hooks/index.tsx"      ,
          "@services":"./src/services/index.tsx"      
        },
      },

     
    ],
  ],
};
