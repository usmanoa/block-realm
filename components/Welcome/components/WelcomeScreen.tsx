import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { WhiteSpace, WingBlank } from '@ant-design/react-native';
import { ALREADY_HAVE_ACCOUNT, SIGNUP, SIGNIN, WELCOME } from './../constants'


export default function WelcomeScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.logo}>{WELCOME}</Text>
      <WingBlank size="lg" style={styles.buttons}>
        <TouchableOpacity style={styles.signupButton}>
            <Text style={styles.signupText}>{SIGNUP}</Text>
        </TouchableOpacity>
        <WhiteSpace size= "lg" />
        <Text style={styles.haveAnAccount}>{ALREADY_HAVE_ACCOUNT}</Text>
        <WhiteSpace size= "lg" />
        <TouchableOpacity style={styles.signinButton}>
            <Text style={styles.signinText}>{SIGNIN}</Text>
        </TouchableOpacity>
        
      </WingBlank>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#FFF',
    justifyContent: 'center',
  },
  logo: {
    textAlign: 'center',
    fontSize: 20,
    color: "#535353"
  },
  buttons: {
    marginTop: 39,
  },
  signupButton: {
    backgroundColor: "#00C2EE",
    borderColor: '#00C2EE',
    borderWidth: 2,
    borderRadius: 50
  },
  signinButton: {
    backgroundColor: "#FFF",
    borderColor: '#00C2EE',
    color: "#00C2EE",
    borderWidth: 2,
    borderRadius: 50
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
