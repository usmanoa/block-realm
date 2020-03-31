import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { WhiteSpace } from '@ant-design/react-native';
import { ALREADY_HAVE_ACCOUNT, SIGNUP, SIGNIN, WELCOME } from './../constants'

export default function WelcomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.welcomeSection}>
                <Text style={styles.logo}>{WELCOME}</Text>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.signupButton}>
                    <Text style={styles.signupText}>{SIGNUP}</Text>
                </TouchableOpacity>
                <WhiteSpace size= "lg" />
                <Text style={styles.haveAnAccount}>{ALREADY_HAVE_ACCOUNT}</Text>
                <WhiteSpace size= "lg" />
                <TouchableOpacity style={styles.signinButton}>
                    <Text style={styles.signinText}>{SIGNIN}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#00C2EE',
        justifyContent: 'center'
    },
    welcomeSection: {
        height: 200,
        backgroundColor: '#00C2EE',
        justifyContent: 'center'
    },
    logo: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
        paddingLeft: 10
    },
    buttons: {
        paddingTop: 60,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        alignItems: 'center',
        backgroundColor: '#FFF'
    },
    signupButton: {
        backgroundColor: '#00C2EE',
        borderColor: '#00C2EE',
        borderWidth: 2,
        borderRadius: 50,
        width: 300,
    },
    signinButton: {
        backgroundColor: '#FFF',
        borderColor: '#00C2EE',
        color: "#00C2EE",
        borderWidth: 2,
        borderRadius: 50,
        width: 300
    },
    signupText: {
        fontSize: 18,
        textAlign: "center",
        color: "#FFF",
        paddingVertical: 15,
        fontWeight: "bold"    
    },
    signinText: {
        fontSize: 18,
        textAlign: "center",
        color: "#00C2EE",
        paddingVertical: 15,
        fontWeight: "bold"        
    },
    haveAnAccount: {
        textAlign: "center",
        color: "#535353"
    }
});
