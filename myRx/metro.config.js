const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {withNativeWind} = require('nativewind/metro');

const config = mergeConfig(getDefaultConfig(__dirname), {
  /**
   * Metro configuration
   * https://reactnative.dev/docs/metro
   *
   * @type {import('metro-config').MetroConfig}
   */
});

module.exports = withNativeWind(config, {input: './global.css'});
