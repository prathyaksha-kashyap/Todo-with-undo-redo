/**
 * @format
 */
 import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider as StoreProvider} from 'react-redux';
import store from '@redux/CreateStore';

AppRegistry.registerComponent(appName, () => App);
const Todo = () => (
    <StoreProvider store={store}>
        <App />
    </StoreProvider>
)
AppRegistry.registerComponent(appName, () => Todo);
