import React, {useState, useEffect} from 'react';
import {
    Image, StyleSheet, ScrollView, Text, TouchableOpacity, View
} from 'react-native';
import previous from '../../../assets/backBlue.png';
import next from '../../../assets/forwardBlue.png';
import { data } from '../../../data';

export default function LeassonContentScreen ({navigation, route}) {
    
    const [index, setIndex] = useState(0)
    
    const previousLesson = () => {
        let newIndex = index - 1
        if(newIndex >= 0) {
            setIndex(newIndex)
        } else {
            navigation.navigate('Lessons')
        }
    }
    
    const module = data.find(({ moduleId }) => moduleId === route.params.moduleId );
    const lessons = module.lessons;

    const nextLesson = () => { 
        let newIndex = index + 1
        if(newIndex < lessons.length) {
            setIndex(newIndex)
        } else {
            navigation.navigate('LessonHome', {
                screen: 'Quiz',
                params: {
                    moduleId: route.params.moduleId
                }
            })
        }
    }

    useEffect(() => {
        setIndex((route.params.lessonId) - 1)
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{lessons[index].lessonTitle}</Text>
                <Text style={styles.content} >
                     {lessons[index].lessonContent}
                </Text>            
            </View>
            
            <View style={styles.navView}>
                <TouchableOpacity
                    onPress={previousLesson}
                    style={styles.navViewIcon}
                >
                    <Image source={previous} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={nextLesson}
                    style={styles.navViewIcon} 
                >
                    <Image source={next} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F2F8FC',
        flexGrow: 1, 
        flexDirection: 'column', 
        justifyContent: 'space-between'
    },
    contentContainer: {
        marginHorizontal: 15,
        marginBottom: 50,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#535353',
        paddingVertical: 5
    },
    content: {
        marginVertical: 10,
        fontSize: 17,
        lineHeight: 24
    },
    navView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
        alignSelf: 'center',
        width: '90%',
        marginBottom: 10,
    },
    navViewIcon: {
        paddingHorizontal: 10,
        flexDirection: 'row'
    },
})