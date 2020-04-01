import React, { useEffect } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { components as Home } from './components/Home';
import { components as ModuleHome } from './components/ModuleHome';


const ModuleNavigator = createStackNavigator({
    'Modules': Home,
    'Lessons': ModuleHome
})

const Navigator = createAppContainer(ModuleNavigator);
  
export default function AppNavigator () {
    return(
        <Navigator />
    );
}