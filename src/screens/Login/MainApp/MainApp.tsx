import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Check from './Check';
import Checker from './Checker';
import Settings from './Settings';
import { MainAppTabParamList } from '../../../navigation/NavigatorTypes';
import Icon from 'react-native-vector-icons/FontAwesome6';

interface MainAppProps { }

interface MainAppState { }

const Tab = createBottomTabNavigator<MainAppTabParamList>();

class MainApp extends Component<MainAppProps, MainAppState> {
    render() {
        return (
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Check" component={Check} options={{ tabBarIcon: () => <Icon name="check" size={24} color="black" /> }} />
                <Tab.Screen name="Checker" component={Checker} options={{ tabBarIcon: () => <Icon name="person-running" size={24} color="black" /> }} />
                <Tab.Screen name="Settings" component={Settings} options={{
                    tabBarIcon: () => <Icon name="gears" size={24} color="black" />
                }} />
            </Tab.Navigator>
        );
    }
}

export default MainApp;