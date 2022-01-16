import React,{useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, Linking} from 'react-native';

const {height, width} =Dimensions.get("window");

const ShowArticleModal = (props) => {
  // const {onClose, article} = props
  const {onClose, article} = props
  const [modalVisible, setModalVisible] = useState(true);

    return (
        <View style={styles.modalContainer} onClose={onClose}>
          <View style={styles.modalView} onClose={onClose}>
            <TouchableOpacity style={styles.button}
              onPress={() => 
                setModalVisible(false),
                onClose
                // showCard()
              } 
            >
              <Text style={{color:"white", fontWeight:"bold", fontSize: 15}}> Go Back! </Text>
            </TouchableOpacity>
            <Text style={styles.articleTitle}>{article.title}</Text>

            {article.author!==null && <Text style={styles.articleAuthor}>Author: {article.author}</Text>}

            <View style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>
              <Image style={styles.articleImage} source={{uri: article.urlToImage}} />
            </View>
            
            <View style={{display: "flex", justifyContent: 'center', alignItems: 'center', paddingTop: 30}}>
              <Text style={styles.articleDescription}>{article.description}</Text>
              <TouchableOpacity style={styles.linkButton} onPress={() => Linking.openURL(article.url)}>
                <Text>View Article in browser</Text>
              </TouchableOpacity>
            </View>
            
          </View>
        </View> 
 
    )
}

const styles = StyleSheet.create({
  modalContainer: {
    display:'flex',
    marginTop:height*0.075, 
    height:height*2,
    height:height*0.925, 
    width:width
  },
    
  modalView: {
    height: '100%',
    width: '100%',
    backgroundColor: "white",
    padding: 15,
    // alignItems: "center",
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 5,
    backgroundColor: "#192734",
    width: 110,
    
    position: 'absolute', top: 5, left: 5, justifyContent: 'center', alignItems: 'center',
  },
  
  articleTitle:{
    marginTop: 30,
    fontSize: 25,
    fontWeight: 'bold',
    color: "black",
  },

  articleAuthor: {
    color: "#192734",
    marginBottom: 15,
    fontSize: 15,
  },

  articleImage: {
    width: width*0.8,
    height: 150,
    marginTop: 10,
  },

  articleDescription: {
    color: "#192734",
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
  },
  
  linkButton : { 
    borderRadius: 20, 
    padding: 10, 
    elevation: 5, 
    backgroundColor: "#192734", 
    justifyContent: 'center', 
    alignItems: 'center',
    color: "white", 
    fontWeight: 'bold',
  }

})

export default ShowArticleModal;