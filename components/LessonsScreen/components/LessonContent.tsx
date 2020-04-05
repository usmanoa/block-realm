import React from 'react';
import {   StyleSheet, ScrollView, Text, View } from 'react-native';

export default function LeassonContent () {
    return (
        <View>
            <ScrollView>
                <Text>
                    Lesson Content
                </Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow'
    }
})