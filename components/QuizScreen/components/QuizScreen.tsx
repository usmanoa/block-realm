import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Text, TouchableOpacity, View, } from 'react-native';
import { data } from '../../../data';

export default function QuizScreen ({ navigation, route }) {
    
    
    const [questionId, setQuestionId] = useState(1)
    const [selected, setSelected] = useState<number | null>(null)
    const [checked, setChecked] = useState(false)

    const module = data.find(({ moduleId }) => moduleId === route.params.moduleId );
    const questions = module.quiz;

    const question = questions[questionId - 1]

    const click = id => setSelected(id)
    const checkAnswer = () => setChecked(true)

    const nextQuestion = () => { 
        let newQuestionId = questionId + 1
        if(newQuestionId <= questions.length) {
            setQuestionId(newQuestionId)
            setSelected(null)
            setChecked(false)
        } else {
            navigation.popToTop()
        }
    }

    useEffect(()=> {
        setSelected(null)
        setChecked(false)
    }, [questionId])

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.quiz}>
            <Text>{questionId}</Text>
                <Text style={styles.quizProgress}>{`${questionId} /  ${questions.length}`}</Text>
                <Text style={styles.quizQuestion}>{question.question}</Text>
                <View style={styles.quizAnswerSection}>
                    
                    {(question.options).map( option => {
                        const isSelected = selected === option.id
                        const isCorrect = option.id === question.correctAnswerId
                        return (
                            <TouchableOpacity
                                key={option.id}
                                style={ 
                                    {
                                        ...styles.quizAnswer,
                                        ...( isSelected ? styles.selected : {}),
                                        ...(checked && isCorrect ? styles.correct : {}),
                                        ...(checked && isSelected && !isCorrect ? styles.wrong : {}),
                                    } 
                                }
                                onPress={() => click(option.id)}
                            >
                                <Text style={styles.quizAnswerText}>{option.text}</Text>
                            </TouchableOpacity>
                        )
                        }
                    )}
                    
                </View>
                {selected && !checked?
                    <TouchableOpacity
                        style={styles.checkAnswer}
                        onPress={checkAnswer}
                    >
                        <Text style={styles.checkAnswerText}>Check</Text>
                    </TouchableOpacity>
                    :
                    null
                }

                {checked?
                    <TouchableOpacity
                        style={styles.checkAnswer}
                        onPress={nextQuestion}
                    >
                        <Text style={styles.checkAnswerText}>Continue</Text>
                    </TouchableOpacity>
                    :
                    null
                }

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
        paddingVertical: 10,
        marginVertical: 7,
        borderColor: '#E2E2E9',
        borderRadius: 8,
        borderWidth: 2, 
    },
    quizAnswerText: {
        textAlign: 'center',
        fontSize: 17,
    },
    selected: {
        backgroundColor: '#cfd8dc',
        borderColor: '#cfd8dc',
    },
    correct: {
        borderColor: 'green'
    },
    wrong: {
        borderColor: 'red'
    },
    checkAnswer: {
        backgroundColor: '#1976D2',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10,
        alignSelf: 'flex-end'
    },
    checkAnswerText: {
        color: '#FFFFFF',
        fontWeight: 'bold'
    }
})

{/* <RadioItem
checked={true}
onChange={event => {}}
>
Use Ant Desgin Component
</RadioItem> */}