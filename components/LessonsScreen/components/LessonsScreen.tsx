import React from 'react';
import { 
    Image, ScrollView, StyleSheet, Text,  TouchableOpacity, View 
} from 'react-native';
import bookWhite from '../../../assets/bookWhite.png';
import quiz from '../../../assets/quiz.png';

export default function LessonsScreen ({ navigation, route }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={{marginHorizontal: 10, marginTop: 15}}>
                
                <TouchableOpacity 
                    style={styles.lesson}
                    onPress={() => navigation.navigate('LessonContent')}
                >
                    <View style={styles.card}> 
                        <View style={styles.cardBody}>
                            <View style={styles.thumbnailSection}>
                                <Text style={styles.lessonId}>1</Text>
                                <Image 
                                    source= {bookWhite}
                                    style={styles.thumbnail}
                                />
                            </View>
                            <View style={styles.lessonDetails}>
                                <Text
                                    numberOfLines={2}
                                    style={styles.lessonTitle}
                                >
                                    Introduction to Blockchain
                                </Text>
                                <Text>2 min read</Text>
                                <Text style={styles.learnText}>Learn</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style={styles.lesson}
                    onPress={() => navigation.navigate('Quiz')}
                >
                    <View style={styles.card}> 
                        <View style={styles.cardBody}>
                            <View style={styles.thumbnailSection}>
                                <Text style={styles.lessonId}>?</Text>
                                <Image 
                                    source= {quiz}
                                    style={styles.thumbnail}
                                />
                            </View>
                            <View style={styles.quiz}>
                                <Text style={styles.quizText}>Quiz</Text>
                                <Text style={styles.learnText}>Test your knoledge</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <Text style={{fontSize: 50}}>{String(route.params.moduleId)}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#FFFFFF'
    },
    lesson: {
        marginBottom: 15
    }, 
    card: {
        borderRadius: 3,
        height: 95,
        elevation: 3,
    },
    cardBody: {
        flexDirection: 'row'
    },
    lessonId: {
        textAlign: 'right',
        paddingTop: 3,
        paddingRight: 5,
        color: '#FFF',
        fontWeight: 'bold'
    },
    thumbnailSection: {
        backgroundColor: '#1976D2',
        width: 70,
        height: 96,
    },
    thumbnail: {
        width: 40, 
        height: 40,
        alignSelf: 'center'
    },
    lessonDetails: {
        borderWidth: 1,
        borderColor: '#cfd8dc',
        paddingVertical: 5,
        paddingHorizontal: 10,
        flex: 1,
        height: 95,
        justifyContent: 'space-between'
    },
    lessonTitle: {
        color: '#535353',
        fontWeight: 'bold',
        fontSize: 17
    },
    learn: {
        flexDirection: 'row'
    },
    learnText: {
        fontSize: 17,
        color: "#535353"
    },
    quiz: {
        borderWidth: 1,
        borderColor: '#cfd8dc',
        paddingVertical: 5,
        paddingHorizontal: 10,
        flex: 1,
        height: 95,
        alignItems: 'center',
        color: '#535353'
    },
    quizText: {
        fontSize: 30,
        color: '#535353'
    }
});