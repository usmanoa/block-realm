import React from 'react';
import { useDispatch } from 'react-redux'
import { StyleSheet, ScrollView, View } from 'react-native';
import Module from './Module';
// import { GET_MODULES } from '../../../redux/action'
import blockchain from '../../../assets/blockchain.png';
import { data } from '../../../data';

/**
 * ModulesScreen displays a list of modules
 */
export default function ModulesScreen({ navigation }) {

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

                {data.map( ({moduleId, imageUrl, title, numberOfLessons}) => (
                    <Module
                        key={moduleId}
                        moduleId={moduleId}
                        imageUrl={blockchain}
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