import React from 'react';
import { 
    Image, ScrollView, StyleSheet, Text,  TouchableOpacity, View 
} from 'react-native';
import { WhiteSpace, WingBlank } from '@ant-design/react-native';
import bookWhite from '../../../assets/bookWhite.png';
import quiz from '../../../assets/quiz.png';

export default function LessonsScreen ({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <WhiteSpace size='lg' />
                <WingBlank size='md'>
                    
                    <TouchableOpacity 
                        style={styles.lesson}
                        onPress={() => navigation.navigate('Lesson')}
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
                                    <Text style={styles.lessonTitle}>Introduction to Blockchain </Text>
                                    <Text>2 min read</Text>
                                    <Text style={styles.learnText}>Learn</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.lesson}>
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


                </WingBlank>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    lesson: {
        marginBottom: 15
    }, 
    card: {
        borderRadius: 3,
        // height: 90,
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
        // height: 91,
    },
    thumbnail: {
        width: 40, 
        height: 40,
        alignSelf: 'center'
    },
    lessonDetails: {
        // backgroundColor: '#F2F8FC',
        borderWidth: 1,
        borderColor: '#cfd8dc',
        paddingVertical: 5,
        paddingHorizontal: 10,
        flex: 1,
        // height: 90,
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
        height: 90,
        alignItems: 'center',
        color: '#535353'
    },
    quizText: {
        fontSize: 30,
        color: '#535353'
    }
});