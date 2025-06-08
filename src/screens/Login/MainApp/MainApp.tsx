import React, { Component } from 'react';
import { BottomTabScreenProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Check from './Check';
import Checker from './Checker';
import Settings from './Settings';
import { MainAppTabParamList } from '../../../navigation/NavigatorTypes';

interface MainAppProps { }

interface MainAppState { }

const Tab = createBottomTabNavigator<MainAppTabParamList>();

class MainApp extends Component<MainAppProps, MainAppState> {
    render() {
        return (
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Check" component={Check} />
                <Tab.Screen name="Checker" component={Checker} />
                <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
        );
    }
}

export default MainApp;