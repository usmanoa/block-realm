import React from 'react';
import {   StyleSheet, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function LeassonContent () {
    return (
        // <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.container}>
                    <View 
                        style= {{
                            marginHorizontal: 15,
                            marginBottom: 50,
                        }}
                    >
                        <Text style={styles.title}>What is Blockchain?</Text>
                        <Text style={styles.content} >
                            What is Blockchain? gfgds ggfgfg dffgfgfd fdffdgfs fdfff fdfdf fdfdfd gfgdsdfdfdf
                            cfffdf ffdfd ddd f fsd df fdfd f fdffddf fdf dfd ffd f ff f ffdf fdf dfd fsfd ffs f fd
                            dsddsfdf ffd f fkdsjd jhhsjdsa hjfjhsad hj hsad j adsad sadsd 
                        </Text>
                        
                    </View>
                    <TouchableOpacity style={styles.nextButton}>
                        <Text style={styles.nextText}>Next Lesson</Text>
                    </TouchableOpacity>
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
    nextButton: {
        backgroundColor: '#1976D2',
        paddingVertical: 13,
        paddingHorizontal: 70,
        borderRadius: 10,
        alignSelf: 'center',
        marginBottom: 10,
    },
    nextText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 18
    }
})