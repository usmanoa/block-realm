import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

export default function SignUp() {
    return (
        <View>
            <Text>SignUp Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        backgroundColor: '#FFF',
        justifyContent: 'center',
    },
});
  