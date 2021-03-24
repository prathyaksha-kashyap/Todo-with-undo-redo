/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {Todo} from '@components'
import {
  StyleSheet,
  View,
} from 'react-native';



const App: () => Node = () => {
  return (
    <View style={{flex:1}}>
          <Todo />
    </View>
  );
};



export default App;
