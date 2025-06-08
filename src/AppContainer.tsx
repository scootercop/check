import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login/Login';
import MainApp from './screens/Login/MainApp/MainApp';
import { RootStackParamList } from './navigation/NavigatorTypes';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="MainApp" component={MainApp} />
    </Stack.Navigator>
  );
}

class AppContainer extends Component {

  public render() {
    return (<NavigationContainer >
      <RootStack />
    </NavigationContainer>
    );
  }
}

export default AppContainer;
