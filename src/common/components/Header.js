import React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';


const { height, width } = Dimensions.get('window');

export const Header = ({title}) => {
    return(
        <View style={styles.header}>
            <View>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#0D47A1',
        height: height*0.075,
        justifyContent: 'center', 
        alignItems: 'center',
        shadowColor: 'white',
        shadowOffset: {width:0, height: 10},
        shadowOpacity: 1,
        elevation: 15,
        position: 'relative',
    },

    title: {
        fontSize: 20,
        fontColor: 'white',
        fontWeight: 'bold',
    }
})