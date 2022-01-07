/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// uuid 사용을 위한 라이브러리
import 'react-native-get-random-values';

AppRegistry.registerComponent(appName, () => App);
