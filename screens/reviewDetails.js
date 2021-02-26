import React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { globalStyles, images } from '../styles/global'
import Card from '../shared/card'

export default function ReviewDetails({navigation}) {
    // const pressHandler = () => {
    //     // navigation.navigate('ReviewDetails')
    //     navigation.push('About')
    // }
    // const pressHandler1 = () => {
    //     // navigation.navigate('ReviewDetails')
    //     navigation.pop()
    // }
    return (
        <View style={globalStyles.container}>
            {/* <Text>ReviewDetail Screen</Text> */}
            {/* <Button title="GO TO ABOUT" onPress={pressHandler}></Button>
            <Button title="GO TO HOME" onPress={pressHandler1}></Button> */}
           <Card>
            <Text>{navigation.getParam('title')}</Text>
            <Text>{navigation.getParam('body')}</Text>
            <View>
                <Text>Movie Zone rating:</Text>
                <Image source={images.ratings[navigation.getParam('rating')]}></Image>
            </View>
           </Card>
        </View>
    )
}
