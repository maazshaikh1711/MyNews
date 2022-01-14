'use strict';
 
import React from 'react';
import {StyleSheet, Text, View, LogBox} from 'react-native';
import CardNews from './src/CardNews';

LogBox.ignoreLogs(["Animated"]);
LogBox.ignoreLogs(["ComponentWillReceiveProps has been"]);

const App = () => {
  return (
    <CardNews/>
  )
}

export default App;