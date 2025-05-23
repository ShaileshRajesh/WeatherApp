/**
 * @format
 */

import './gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const MainApp = App;
AppRegistry.registerComponent(appName, () => MainApp);
