import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, Modal, Alert} from 'react-native';

export const Card = ({props}) => {

  const [modalVisible, setModalVisible] = useState(false);
  
      return (
        <>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{flex: 1, justifyContent: "center", alignItems: "center",}}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <TouchableOpacity style={styles.button}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

          <TouchableOpacity style={{ alignItems: 'center' , justifyContent: 'center' }} onPress={()=> setModalVisible(true)}>
            <View style={styles.card}>
      
              <Image style={styles.thumbnail} source={{uri: props.urlToImage}} />
              
              <View style={{height: 70, paddingTop: 5}}>
                <Text style={styles.title}>{props.title}</Text>
              </View>
              
              <View style={{margin: '5%'}}>
                <Text style={styles.text}>{props.description}</Text>
              </View>
      
            </View>
          </TouchableOpacity>
        </>
      )
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
      height: '90%',
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
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
})

export default Card;