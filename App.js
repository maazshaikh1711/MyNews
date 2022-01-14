'use strict';
 
import React from 'react';
import {StyleSheet, Text, View, LogBox} from 'react-native';
import CardNews from './src/CardNews';
import {Header} from './src/common/components/Header';

LogBox.ignoreLogs(["Animated"]);
LogBox.ignoreLogs(["ComponentWillReceiveProps has been"]);

const App = () => {
  return (
    <>
      <Header title={"Rapid News"}/>
      <CardNews/>
    </>
  )
}

export default App;