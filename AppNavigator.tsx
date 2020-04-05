import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { components as ModulesScreen } from './components/ModulesScreen';
import { components as LessonsScreen } from './components/LessonsScreen';
import LessonContent from './components/LessonsScreen/components/LessonContent'

// const LessonToContentNavigator = createStackNavigator({
//     'Lessons': Lessons,
//     Content: {
//         screen: LessonContent,
//         navigationOptions: {
//             headerTitle: 'Lesson'
//         }
//     }
// },)

// const ModuleToLessonNavigator = createStackNavigator({
//     'Modules': Modules,
//     Lessons: {
//         screen: LessonToContentNavigator,
//         navigationOptions: {
//             headerTintColor: '#1976D2',
//         }
//     }
// })

const Stack = createStackNavigator();
  
export default function AppNavigator () {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Modules'>
                <Stack.Screen name='Modules' component={ModulesScreen} />
                <Stack.Screen name='Lessons' component={LessonsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}