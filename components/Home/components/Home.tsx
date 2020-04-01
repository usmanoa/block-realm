import React from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { Card, WingBlank, WhiteSpace } from '@ant-design/react-native';
import { MODULES } from '../constants'
import blockchain from '../../../assets/blockchain.png';
 
export default function Home(props) {
    return (
        <View style={styles.container}>
            <ScrollView >
                <WingBlank size="md">
                    <WhiteSpace size='lg' />
                    <Card style={styles.module}> 
                        <Card.Body style={styles.cardBody}>
                            <Image 
                                source={blockchain}
                                resizeMode= 'cover'
                                style={styles.thumbnail}
                            />
                            <WingBlank >
                                <WhiteSpace />
                                <View style={styles.moduleDescription}>
                                    <Text style={styles.moduleTitle}>Introduction to Blockchain</Text>
                                    <Text style={styles.lessonCount} >5 lessons</Text>
                                    <TouchableOpacity 
                                        style={styles.button}
                                        onPress={() => props.navigation.navigate('Lessons')}
                                    >
                                        <Text style={styles.buttonText}>Begin</Text>
                                    </TouchableOpacity>
                                </View>
                            </WingBlank>
                        </Card.Body>
                    </Card>                   
                    
                </WingBlank>
            </ScrollView>
        </View>
    )
}

Home.navigationOptions= {
    headerTintColor: '#1976D2',
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    module: {
        shadowColor:'#000',
        shadowRadius: 5,
        shadowOffset: {width: 0, height: 0},
        elevation: 6,
        paddingBottom: 5,
        borderRadius: 20,
        marginBottom: 15,
        backgroundColor: '#F2F8FC'
    },
    cardBody: {
        paddingTop: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
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
        color: "#535353"
    },
    moduleDescription: {
        flex: 1
    },
    lessonCount: {
        fontSize: 14,
        color: "#999",
        paddingTop: 5
    },
    button: {
        backgroundColor: '#1976D2',
        alignSelf: 'flex-end',
        width: 100,
        borderRadius: 10,
        paddingVertical: 10,
        color: '#FFF',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonText : {
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center'
    }
})