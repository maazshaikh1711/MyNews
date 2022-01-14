'use strict';
 
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CardNews from './src/CardNews';
const headLinesURL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    }

  render() {
    return (
      <CardNews url={headLinesURL} />
    )
  }
}