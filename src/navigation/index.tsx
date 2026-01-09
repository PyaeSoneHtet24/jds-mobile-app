import React, {useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import {DASHBOARD_SCREEN, SIGN_IN_SCREEN} from '../constants/Route.constant';
import {DashboardScreen, SignInScreen} from '../screen';

const RootStack = createNativeStackNavigator();

export default function RootNavigation() {
  const navigationRef = useRef(null);
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar barStyle={'dark-content'} />
      <RootStack.Navigator
        screenOptions={{headerShown: true, gestureEnabled: false}}
        initialRouteName={SIGN_IN_SCREEN}>
        <RootStack.Screen name={SIGN_IN_SCREEN} component={SignInScreen} />
        <RootStack.Screen name={DASHBOARD_SCREEN} component={DashboardScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
