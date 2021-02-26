import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'
import Header from '../shared/header'
import React from 'react'


const screens = {
    Home:{
        screen: Home,
        navigationOptions: ({navigation}) => {
           return {
            headerTitle:()=> <Header title="Movie Zone" navigation={navigation}/>,
           }
            // headerStyle:{backgroundColor:'#eee'}
        }
    },
    ReviewDetails:{
        screen: ReviewDetails,
        navigationOptions:{
            title:'Movie Reviews',
            // headerStyle:{backgroundColor:'#eee'}
        }
    },
    // About:{
    //     screen: About
    // }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerTintColor:'#444',
        headerStyle:{backgroundColor:'#eee'}
    }
});

export default HomeStack