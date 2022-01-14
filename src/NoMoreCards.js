import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default class NoMoreCards extends React.Component {
    constructor(props) {
      super(props);
    }
   
    render() {
      return (
        <View style={styles.noMoreCards}>
          <Text>No more cards</Text>
        </View>
      )
    }
}

const styles = StyleSheet.create({
    noMoreCards: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
})