import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, Modal, Alert} from 'react-native';
import ShowArticleModal from './common/ShowArticleModal';

export const Card = ({props}) => {

   const [openArticleModal, setOpenArticalModal]= useState(false)

      return (
        <>
        <View>
          {openArticleModal && <ShowArticleModal onClose={()=>{setOpenArticalModal(false)}}/>
          }
        </View>
          <TouchableOpacity style={{ alignItems: 'center' , justifyContent: 'center' }} onPress={()=> 
            setOpenArticalModal(true)
          // <ShowArticleModal visible={true}/> 
              // {1==1 && <ShowArticleModal visible={true}/>}
              // Alert.alert("Tapped on a card")
          }>
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
})

export default Card;