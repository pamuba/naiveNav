import React from 'react';
import { Button, View, Text } from 'react-native';
import { globalStyles } from '../styles/global'

export default function About({navigation}) {
    const pressHandler = () => {
        // navigation.navigate('ReviewDetails')
        // navigation.pop()
        navigation.goBack()
    }
    return (
        <View style={globalStyles.container}>
            <Text>About Screen</Text>
            <Button title="GO TO REVIEW DETAILS" onPress={pressHandler}></Button>
        </View>
    )
}

