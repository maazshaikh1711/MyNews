import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header} from '../common/components/Header';
import CardNews from '../CardNews';

const IndiaNews = () => {

    const URL = 'https://newsapi.org/v2/top-headlines?country=in&apiKey='

    return(
        <>
            {/* <Header title={"Rapid News"}/> */}
            <CardNews URL={URL}/>
        </>
    )
}

export default IndiaNews;