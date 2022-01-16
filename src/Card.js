import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, Modal, Alert} from 'react-native';
import ShowArticleModal from './common/ShowArticleModal';

export const Card = ({props}) => {

  const [openArticleModal, setOpenArticalModal]= useState(false);
  const [showCard, setShowCard] = useState(true);

      return (
        <>
          {
          openArticleModal && <ShowArticleModal onClose={()=>{setOpenArticalModal(false), setShowCard(true)}} 
                                                // showCard={()=>{setShowCard(true)}}
                                                article = {props} 
                              />
          }

        <View>
          {
            (showCard === true) ?
              <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={()=> {
                setShowCard(false)
                setOpenArticalModal(true)
              }}>
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
              :
              null
          }
          </View>
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
      height: '95%',
      width: '95%',
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