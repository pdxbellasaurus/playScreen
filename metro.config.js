/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
//Added 10-19-2021 for react-native-svg package
 const { getDefaultConfig } = require('metro-config');

 module.exports = (async () => {
   const {
     resolver: { sourceExts, assetExts },
   } = await getDefaultConfig();
   return {
     transformer: {
       babelTransformerPath: require.resolve('react-native-svg-transformer'),
     },
     resolver: {
       assetExts: assetExts.filter(ext => ext !== 'svg'),
       sourceExts: [...sourceExts, 'svg'],
     },
   };
 })();
 //END ADD

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true, 
      },
    }),
  },
  //ADD 10-23-2021 to resolve font bundler
  resolver: {                              
    sourceExts: ['jsx', 'js', 'ts', 'tsx'],
  },
};
