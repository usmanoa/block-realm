import React from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { MODULES } from '../constants'
import blockchain from '../../../assets/blockchain.png';
 
export default function ModulesScreen(props) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={{marginTop: 20, marginHorizontal: 10}}>

                <View style={styles.module}> 
                    <Image 
                        source={blockchain}
                        resizeMode= 'cover'
                        style={styles.thumbnail}
                    />
                    <View style={styles.moduleDescription}>
                        <Text
                            numberOfLines={2}
                            style={styles.moduleTitle}
                        >
                            Introduction to Blockchain
                        </Text>
                        <Text style={styles.lessonCount} >5 lessons</Text>
                        <TouchableOpacity 
                            style={styles.button}
                            onPress={() => props.navigation.navigate('Lessons')}
                        >
                            <Text style={styles.buttonText}>Begin</Text>
                        </TouchableOpacity>
                    </View> 
                </View>
                

            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#FFFFFF'
    },
    module: {
        shadowColor:'#000',
        shadowRadius: 5,
        shadowOffset: {width: 0, height: 0},
        elevation: 6,
        paddingBottom: 10,
        borderRadius: 20,
        marginBottom: 25,
        backgroundColor: '#F2F8FC',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    thumbnail: {
        width: '100%',
        height: 120,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
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
        paddingVertical: 10,
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