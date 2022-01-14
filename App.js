'use strict';
 
import React from 'react';
import {StyleSheet, Text, View, LogBox} from 'react-native';
import CardNews from './src/CardNews';

LogBox.ignoreLogs(["Animated"]);
LogBox.ignoreLogs(["ComponentWillReceiveProps has been"]);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    }

  render() {
    return (
      <CardNews/>
    )
  }
}