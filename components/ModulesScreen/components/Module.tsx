import React from 'react';
import { 
    StyleSheet, View, Text, TouchableOpacity, Image 
} from 'react-native';
import { START, LESSONS } from '../constants';
 
type Props = {
    /** uniques id of a module */
    id: number,
    /** Url of module image */
    imageUrl:  any,
    /** Title of module */
    title: string,
    /** Number of lessons in a module */
    numberOfLessons: number,
    /** Callback function passed to the onPress handler */
    handlePressAction: (id: number) => void
};

/**
 * Module component that displays information about a module
 */
function Module({ id, imageUrl, title, numberOfLessons, handlePressAction }: Props) {

    /**
     * Handles onPress event on the component
     * 
     * @function
     */
    const handleOnPress = () => {
        handlePressAction(id)
    }

    return (
        <View style={styles.module}> 
            <Image 
                source={imageUrl}
                resizeMode= 'cover'
                style={styles.thumbnail}
            />
            <View style={styles.moduleDescription}>
                <Text
                    numberOfLines={2}
                    style={styles.moduleTitle}
                >
                    {title}
                </Text>
                <Text style={styles.lessonCount} >{`${numberOfLessons} ${LESSONS}`}</Text>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={handleOnPress}
                >
                    <Text style={styles.buttonText}>{START}</Text>
                </TouchableOpacity>
            </View> 
        </View>
                
    )
}

export default Module;

const styles = StyleSheet.create({
    module: {
        shadowColor:'#000',
        shadowRadius: 5,
        shadowOffset: {width: 0, height: 0},
        elevation: 6,
        paddingBottom: 15,
        borderRadius: 15,
        marginBottom: 20,
        backgroundColor: '#F2F8FC',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    thumbnail: {
        width: '100%',
        height: 120,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginRight: 10,
    },
    moduleTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        flex: 1,
        color: '#535353'
    },
    moduleDescription: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 10 
    },
    lessonCount: {
        fontSize: 14,
        color: '#999',
        paddingTop: 5
    },
    button: {
        backgroundColor: '#1976D2',
        alignSelf: 'flex-end',
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 30,
        marginRight: 5,
        color: '#FFF',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonText : {
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center',
        fontSize: 17
    }
})