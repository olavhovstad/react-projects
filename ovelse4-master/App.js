import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView,SafeAreaView } from 'react-native';
import ScrollViewScreen from "./components/ScrollViewScreen";
import CarFlatlListScreen from "./components/CarFlatlListScreen";
import UserListScreen from "./components/UserListScreen";
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from "react-navigation-stack";
import {createBottomTabNavigator} from "react-navigation-tabs";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import UserProfilScreen from "./components/Api/UserProfilScreen";

/*Her har vi stack navigationen*/
const stackNavigator = createStackNavigator({
        /*Fra venstre er det side navnet og screen er vores View / component*/
        UserList: { screen: UserListScreen },
        UserProfile:{screen: UserProfilScreen}
    },
    {
        /*Hvilket View skal starte*/
        initialRouteName:'UserList',
        navigationOptions:{
            title:'Bruger liste'
        }
    }
);

// Denne TabNavigator holder styr på det yderste niveau af navigation i appen.
const TabNavigator = createBottomTabNavigator(
    {
        /*Tilføj routes*/
        ScrollView: {
            screen: ScrollViewScreen,
            navigationOptions: {
                tabBarLabel:"1 ScrollViews",
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="ios-settings" size={24} color={tintColor} />
                )
            },
        },
        /*Navn på Route*/
        Local: {
            screen: CarFlatlListScreen,
            navigationOptions: {
                tabBarLabel:"2. Local FlatList",
                tabBarIcon: ({ tintColor }) => (
                    <AntDesign name="car" size={24} color={tintColor} />
                )
            },
        },
        navigator: {
            /*HVilket view skal loades*/
            screen: stackNavigator,
            /*Instillinger til navigation*/
            navigationOptions: {
                /*Navn*/
                tabBarLabel:"3 FlatList og Data fra netværk + ( ekstra )",
                /*Ikon*/
                tabBarIcon: ({ tintColor }) => (
                    <AntDesign name="user" size={24} color="black" />
                )
            },
        }
    },
    /*Generelle label indstillinger*/
    {
        tabBarOptions: {
            showIcon:true,
            labelStyle: {
                fontSize: 15,
            },
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
            size:40
        }
    }
)





export default createAppContainer(TabNavigator)


const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding:20,
      marginTop:40,
  },
    tabIcon: {
        width: 32,
        height: 32,
    },
});
