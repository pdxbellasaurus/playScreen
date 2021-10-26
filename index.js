/**
 * @format
 */

import {AppRegistry} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import App from './App';
import {name as appName} from './app.json';
// import "@fontsource/rock-salt"
// import "@fontsource/roboto-condensed";

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => require('./service'));
