import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header} from '../common/components/Header';
import CardNews from '../CardNews';

const ForYouNews = () => {
    return(
        <>
            {/* <Header title={"Rapid News"}/> */}
            <CardNews/>
        </>
    )
}

export default ForYouNews;