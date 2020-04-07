import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { components as ModulesScreen } from './components/ModulesScreen';
import { components as LessonsScreen } from './components/LessonsScreen';
import LessonContent from './components/LessonsScreen/components/LessonContent'

const HomeStack = createStackNavigator();
const LessonStack = createStackNavigator()

function LessonStackScreen () {
    return (
        <LessonStack.Navigator>
            <LessonStack.Screen
                name='Lessons'
                component={LessonsScreen}
                options= {{
                    headerTintColor: '#1976D2',
                }}
            />
            <LessonStack.Screen
                name='Lesson'
                component={LessonContent}
                options= {{
                    headerTintColor: '#1976D2',
                    headerStyle: {
                        backgroundColor: '#F2F8FC',
                        elevation: 0
                    }
                }}
            />
        </LessonStack.Navigator>
    )
}
  
export default function AppNavigator () {
    return(
        <NavigationContainer>
            <HomeStack.Navigator initialRouteName='Modules'>
                <HomeStack.Screen
                    name='Modules'
                    component={ModulesScreen}
                    options= {{
                        headerTintColor: '#1976D2'
                    }}
                />
                <HomeStack.Screen
                    name='Lessons'
                    component={LessonStackScreen}
                    options= {{
                        headerShown: false
                    }}
                />
            </HomeStack.Navigator>
        </NavigationContainer>
    );
}