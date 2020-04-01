import React from 'react';
import {    StyleSheet, Text, View, ScrollView } from 'react-native';
import { WhiteSpace, WingBlank } from '@ant-design/react-native';

export default function ModuleHome () {
    return (
        <View style={styles.container}>
            <ScrollView>
                <WhiteSpace size='lg' />
                <WingBlank>
                    <Text>ModuleHome</Text>

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
    }
});