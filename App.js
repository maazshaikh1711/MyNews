'use strict';
 
import React from 'react';
import {StyleSheet, Text, View, Image, LogBox} from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import {NEWS_API_KEY} from '@env';

LogBox.ignoreLogs(["Animated"]);
LogBox.ignoreLogs(["ComponentWillReceiveProps has been"]);

class Card extends React.Component {
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

class NoMoreCards extends React.Component {
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

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outOfCards: false,
      articles : [],
    }
  }
 
  handleYup (card) {
    console.log("yup")
  }
 
  handleNope (card) {
    console.log("nope")
  }
 
  cardRemoved (index) {
    console.log(`The index is ${index}`);
 
    let CARD_REFRESH_LIMIT = 3;
 
    if (this.state.articles.length - index <= CARD_REFRESH_LIMIT + 1) {
      console.log(`There are only ${this.state.articles.length - index - 1} cards left.`);
 
      if (!this.state.outOfCards) {
        this.setState({
          outOfCards: true
        })
      }
    }
  }
 
componentDidMount(){
  async function fetchNewsJSON() {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`);
    const news = await response.json();
    return news;
  }

  fetchNewsJSON().then(newsJsonObject => {
    // fetched news
    // console.log(news);
    
    if(newsJsonObject.status == "ok"){

      this.setState({articles: newsJsonObject.articles})

      /*
      //Displaying authors
      for (let article of this.state.articles)
      {
        if(article.author == null){
          article.author = "Unknown author";
        }
        console.log(article.author);
      }

      //Displaying Title
      for (let article of this.state.articles)
      {
        if(article.title == null){
          article.title = "No Title Available";
        }
        console.log(article.title);
      }
      */
    }
    else{
      console.log("Something went wrong in accessing articles");
    }
  })
  .catch((err)=> console.log(`Error: ${err.message}`));
}

  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center',backgroundColor:"#192734"}}>
      
        <SwipeCards
          cards={this.state.articles}
          loop={false}
  
          renderCard={(cardData) => <Card {...cardData} />}
          renderNoMoreCards={() => <NoMoreCards />}
          showYup={true}
          showNope={true}
  
          handleYup={this.handleYup}
          handleNope={this.handleNope}
          cardRemoved={this.cardRemoved.bind(this)}
        />
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
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})