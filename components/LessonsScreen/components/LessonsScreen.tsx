import React from 'react';
import { useSelector } from 'react-redux'
import { 
    ScrollView, StyleSheet, View 
} from 'react-native';
import Lesson from './Lesson';
import Quiz from './Quiz';
import { data } from '../../../data';

export default function LessonsScreen ({ navigation, route }) {
    const arr = [
        {lessonId: 1, lessonTitle: 'Hello'},
        {lessonId: 2, lessonTitle: 'Hello'},
        {lessonId: 3, lessonTitle: 'Hello'},
        {lessonId: 4, lessonTitle: 'Hello'},
       ]

    const module = data.find(({ moduleId }) => moduleId === route.params.moduleId );
    const lessons = module.lessons;

    /**
     * Handles onPress event and navigate to the next screen
     * 
     * @function
     * @param {number} id 
     */
    const handleLessonPress = (id: number): void => {
        navigation.navigate('LessonHome', {
            screen: 'LessonContent',
            params: {
                lessonId: id,
                moduleId: route.params.moduleId
            }
        })
    }

    /**
     * Handles onPress event and navigate to the next screen
     * 
     * @function
     * @param {number} id 
     */
    const handleQuizPress = (id: number): void => {
        navigation.navigate('LessonHome', {
            screen: 'Quiz',
            params: {moduleId: id}
        })
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.marginContainer}>
                
                {lessons.map(({lessonId, lessonTitle}) => (
                    <Lesson
                        key={lessonId}
                        lessonId={lessonId}
                        lessonTitle={lessonTitle}
                        handlePressAction={handleLessonPress}
                    />
                ))}
                
                <Quiz 
                    moduleId={route.params.moduleId}
                    handlePressAction={handleQuizPress}
                />
                
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#FFFFFF'
    },
    marginContainer: {
        marginHorizontal: 10,
        marginTop: 15
    }
});