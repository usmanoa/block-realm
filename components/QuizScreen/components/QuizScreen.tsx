import React from 'react';
import { StyleSheet, ScrollView, Text, View, } from 'react-native';

export default function QuizScreen () {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text>Quiz Screen</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F2F8FC',
        flex: 1,
    }
})