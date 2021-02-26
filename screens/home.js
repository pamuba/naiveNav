import React, {useState} from 'react';
import { TouchableOpacity, FlatList, View, Text } from 'react-native';
import { globalStyles } from '../styles/global'
import Card from '../shared/card';

export default function Home({navigation}) {
    // const pressHandler = () => {
    //     // navigation.navigate('ReviewDetails')
    //     navigation.push('ReviewDetails')
    // }
    const [reviews, setReviews] = useState([
        { title: 'The God Father(1974)', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'The Dark Knight (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'The Schindlers List', rating: 3, body: 'lorem ipsum', key: '3' },
      ]);

    return (
        <View style={globalStyles.container}>
            <FlatList data={reviews} renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
             <Card>
              <Text style={globalStyles.titleText}>{ item.title }</Text>
             </Card>
            </TouchableOpacity>
            )} />
            {/* <Button title="GO TO REVIEW DETAILS" onPress={pressHandler}></Button> */}
        </View>
    )
}

