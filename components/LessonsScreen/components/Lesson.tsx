import React from 'react';
import { 
    Image, StyleSheet, Text, TouchableOpacity, View 
} from 'react-native';
import bookWhite from '../../../assets/bookWhite.png';
import { LEARN } from '../constants';

type Props = {
    /** unique id of a lesson */
    lessonId: number,
    /** Title of module */
    lessonTitle:  string,
    /** Callback function passed to the onPress handler */
    handlePressAction: (id: number) => void
};

/**
 * Lesson component that displays information about a lesson
 */
export default function Lesson ({ lessonId, lessonTitle, handlePressAction }: Props) {
    
    /**
     * Handles onPress event on the component
     * 
     * @function
     */
    const handleOnPress = () => {
        handlePressAction(lessonId)
    }

    return (
        <TouchableOpacity 
            style={styles.lesson}
            onPress={handleOnPress}
        >
            <View style={styles.card}> 
                <View style={styles.cardBody}>
                    <View style={styles.thumbnailSection}>
                        <Text style={styles.lessonId}>{lessonId}</Text>
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
                            {lessonTitle}
                        </Text>
                        <Text style={styles.learnText}>{LEARN}</Text>
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
        paddingTop: 16,
        color: '#535353',
        fontSize: 18
    },
    learn: {
        flexDirection: 'row'
    },
    learnText: {
        fontSize: 17,
        color: "#535353"
    }
});