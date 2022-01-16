import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Header } from '../common/components/Header';
import CardNews from '../CardNews';

const AllNews = () => {

    const URL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey='

    return(
        <>
            {/* <Header title={"Rapid News"}/> */}
            <CardNews URL={URL}/>
        </>
    )
}

export default AllNews;