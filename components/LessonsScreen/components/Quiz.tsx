import React from 'react';
import { 
    Image, StyleSheet, Text, TouchableOpacity, View 
} from 'react-native';
import { QUESTION_MARK, QUIZ, TEST } from '../constants'
import quiz from '../../../assets/quiz.png';

type Props = {
    /** unique id of a module */
    moduleId: number,
    /** Callback function passed to the onPress handler */
    handlePressAction: (id: number) => void
};

/**
 * Quiz component
 */
export default function Quiz ({ moduleId, handlePressAction }) {
    
    /**
     * Handles onPress event on the component
     * 
     * @function
     */
    const handleOnPress = () => {
        handlePressAction(moduleId)
    }

    return (
        <TouchableOpacity 
            style={styles.lesson}
            onPress={handleOnPress}
        >
            <View style={styles.card}> 
                <View style={styles.cardBody}>
                    <View style={styles.thumbnailSection}>
                        <Text style={styles.lessonId}>{QUESTION_MARK}</Text>
                        <Image 
                            source= {quiz}
                            style={styles.thumbnail}
                        />
                    </View>
                    <View style={styles.quiz}>
                        <Text style={styles.quizText}>{QUIZ}</Text>
                        <Text style={styles.learnText}>{TEST}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>     
    );
}

const styles = StyleSheet.create({
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