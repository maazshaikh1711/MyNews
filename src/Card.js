import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class Card extends React.Component {
    constructor(props) {
      super(props);
    }
   
    render() {
      return (
        <View style={styles.card}>
  
          <Image style={styles.thumbnail} source={{uri: this.props.urlToImage}} />
          
          <View style={{height: 70, paddingTop: 5}}>
            <Text style={styles.title}>{this.props.title}</Text>
          </View>
          
          <View style={{margin: '5%'}}>
            <Text style={styles.text}>{this.props.description}</Text>
          </View>
  
        </View>
      )
    }
}

const styles = StyleSheet.create({
    card: {
      alignItems: 'center',
      borderRadius: 5,
      overflow: 'hidden',
      borderColor: 'grey',
      backgroundColor: '#3A3B3C',
      borderWidth: 1,
      elevation: 1,
      height: '85%',
      width: '90%',
    },
  
    title: {
      justifyContent: 'flex-start',
      fontSize: 25,
      fontWeight: 'bold',
    },
    thumbnail: {
      width: 300,
      height: 300,
      marginTop: 10,
    },
    text: {
      fontSize: 20,
    },
})