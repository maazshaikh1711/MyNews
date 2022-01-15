import React,{useState} from 'react';
import {View, Text, StyleSheet, Modal, TouchableOpacity, Dimensions} from 'react-native';

const {height, width} =Dimensions.get("window");

const ShowArticleModal = (props) => {
  const {onClose, article} = props
  const [modalVisible, setModalVisible] = useState(true);

    return (
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={onClose}
        //onShow={fun can be assigned, function that will be called once the modal has been shown}

        onClose={onClose}
      >
        <View style={styles.modalContainer}>
            <View style={styles.modalView} onClose={onClose}>
              <Text style={styles.modalText}>{article.title}</Text>
              <TouchableOpacity style={styles.button}
                onPress={() => setModalVisible(false)}
                onPress = {onClose}
              >
                <Text>Hide Modal</Text>
              </TouchableOpacity>
            </View>
        </View> 
 
      </Modal>
    )
}

const styles = StyleSheet.create({
  modalContainer: {
    display:'flex',
    marginTop:height*0.075, 
    height:height*0.925, 
    width:width
  },
    
  modalView: {
    height: '100%',
    width: '100%',
    backgroundColor: "grey",
    padding: 35,
    alignItems: "center",
    // borderRadius: 20,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5
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

export default ShowArticleModal;