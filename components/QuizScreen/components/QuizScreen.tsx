import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, TouchableOpacity, View, } from 'react-native';
import { Radio } from '@ant-design/react-native';

const RadioItem = Radio.RadioItem;

export default function QuizScreen ({ route }) {
    const [selected, setSelected] = useState<number | null>(null)
    const [checked, setChecked] = useState(false)
    const answers = [
        {id: 1, text: 'One'},
        {id: 2, text: 'Two'},
        {id: 3, text: 'Three'}
    ]
    const correctAnswerId = 2

    const click = id => setSelected(id)
    const checkAnswer = () => setChecked(true)

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.quiz}>

                <Text style={styles.quizProgress}>1 / 4</Text>
                <Text style={styles.quizQuestion}>Which of these is not a type of cryptocurrency exchange?</Text>
                <View style={styles.quizAnswerSection}>
                    
                    {answers.map( answer => {
                        const isSelected = selected === answer.id
                        const isCorrect = answer.id === correctAnswerId
                        return (
                            <TouchableOpacity
                                key={answer.id}
                                style={ 
                                    {
                                        ...styles.quizAnswer,
                                        ...( isSelected ? styles.selected : {}),
                                        ...(checked && isCorrect ? styles.correct : {}),
                                        ...(checked && isSelected && !isCorrect ? styles.wrong : {}),
                                    } 
                                }
                                onPress={() => click(answer.id)}
                            >
                                <Text style={styles.quizAnswerText}>{answer.text}</Text>
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
                        onPress={()=> alert('Next Question')}
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