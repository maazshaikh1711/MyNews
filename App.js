'use strict';
 
import React from 'react';
import {StyleSheet, Text, View, LogBox, StatusBar} from 'react-native';
import {Header} from './src/common/components/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import Icon from 'react-native-vector-icons/FontAwesome';
import IndiaNews from './src/IndiaNewsPage/IndiaNews';
import AllNews from './src/AllNewsPage/AllNews';

LogBox.ignoreLogs(["Animated"]);
LogBox.ignoreLogs(["componentWillReceiveProps has been"]);
LogBox.ignoreLogs(["Bottom Tab Navigator"]);

export const Tabbars = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'India News') {
            iconName = focused ? 'md-home-sharp' : 'md-home-outline';
          } else if (route.name === 'All News') {
            iconName = focused? 'stats-chart' : 'stats-chart-outline';
          }
          
          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}

      screenOptions = {{
        headerShown: false
      }}
      
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'black',
        activeBackgroundColor: '#0D47A1',
        inactiveBackgroundColor: '#1465e3',
        showLabel: true,
      }}>
      <Tab.Screen name="India News" component={IndiaNews} />
      <Tab.Screen name="All News" component={AllNews} />

    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#0D47A1" />
      <NavigationContainer documentTitle={{ enabled : false }} >
        <Header title={"Rapid News"}/>
        <Tabbars/>
        {/* <CardNews/> */}
      </NavigationContainer>
    </>
  )
}

export default App;