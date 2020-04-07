import React from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import Module from './Module';
import blockchain from '../../../assets/blockchain.png';
 
/**
 * ModulesScreen displays a list of modules
 */
export default function ModulesScreen({ navigation }) {

    const arr = [
        {id: 1, imageUrl: blockchain, title: 'Hello', numberOfLessons: 5},
        {id: 2, imageUrl: blockchain, title: 'Hello', numberOfLessons: 5},
        {id: 3, imageUrl: blockchain, title: 'Hello', numberOfLessons: 5}
    ]

    /**
     * Handles onPress event and navigate to the next screen
     * 
     * @function
     * @param {number} id 
     */
    const handlePress = (id: number): void => {
        navigation.navigate('LessonHome', {
            screen: 'Lessons',
            params: {moduleId: id}
        })
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.marginContainer}>

                {arr.map( ({id, imageUrl, title, numberOfLessons}) => (
                    <Module
                        id={id}
                        imageUrl={imageUrl}
                        title={title}
                        numberOfLessons={numberOfLessons}
                        handlePressAction={handlePress}
                    />
                ))} 

            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#FFFFFF'
    },
    marginContainer: {
        marginTop: 20,
        marginHorizontal: 10
    }
})