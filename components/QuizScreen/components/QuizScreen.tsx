import React from 'react';
import { StyleSheet, ScrollView, Text, View, } from 'react-native';

export default function QuizScreen () {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.quiz}>

                <Text style={styles.quizProgress}>1 / 4</Text>
                <Text style={styles.quizQuestion}>Which of these is not a type of cryptocurrency exchange?</Text>
                <View style={styles.quizAnswerSection}>
                    
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F2F8FC',
        flexGrow: 1,
    },
    quiz: {
        marginHorizontal: 20,
        marginVertical: 10,
    },
    quizProgress: {
        color: '#535353',
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 20,
    },
    quizQuestion: {
        textAlign: 'center',
        fontSize: 20,
    },
    quizAnswerSection: {
        marginVertical: 30
    },
    quizAnswer: {

    }
})