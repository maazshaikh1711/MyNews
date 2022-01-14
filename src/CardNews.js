import React from 'react';
import {StyleSheet, Text, View, Image, LogBox} from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import {NEWS_API_KEY} from '@env';
import Card from './Card';
import NoMoreCards from './NoMoreCards';

LogBox.ignoreLogs(["Animated"]);
LogBox.ignoreLogs(["ComponentWillReceiveProps has been"]);

export default class CardNews extends React.Component {
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
   
  componentDidMount() {
    async function fetchNewsJSON() {
        // console.log(this.props.url);
        const response = await fetch(`${this.props.url}${NEWS_API_KEY}`);
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