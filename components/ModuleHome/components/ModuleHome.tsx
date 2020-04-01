import React from 'react';
import { 
    Image, ScrollView, StyleSheet, Text,  TouchableOpacity, View 
} from 'react-native';
import { Card, WhiteSpace, WingBlank } from '@ant-design/react-native';
import bookWhite from '../../../assets/bookWhite.png';

export default function ModuleHome () {
    return (
        <View style={styles.container}>
            <ScrollView>
                <WhiteSpace size='lg' />
                <WingBlank size='sm'>
                    
                    <TouchableOpacity style={styles.lesson}>
                        <View style={styles.card}> 
                            <View style={styles.cardBody}>
                                <View style={styles.thumbnailSection}>
                                    <Image 
                                        source= {bookWhite}
                                        style={styles.thumbnail}
                                    />
                                </View>
                                <View style={styles.lessonDetails}>
                                     <Text style={styles.lessonTitle}>Introdhghgh h h hh hhh hh hh hh hh hh hh hh hh hh jhj jhj man </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                </WingBlank>
            </ScrollView>
        </View>
    );
}

ModuleHome.navigationOptions= {
    headerTintColor: '#1976D2',
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    lesson: {
        marginBottom: 10
    }, 
    card: {
        borderRadius: 3,
        height: 80,
        elevation: 3,
    },
    cardBody: {
        flexDirection: 'row'
    },
    thumbnailSection: {
        backgroundColor: '#1976D2',
        width: 70,
        height: 81,
        justifyContent: 'center',
        alignItems: 'center'
    },
    thumbnail: {
        width: 40, 
        height: 40
    },
    lessonDetails: {
        borderWidth: 1,
        borderColor: '#cfd8dc',
        padding: 5,
        flex: 1
    },
    lessonTitle: {
        flex: 1
    }
});