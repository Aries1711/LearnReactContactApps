import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { Text,View } from 'react-native';
import { REGISTER } from '../constants/routeNames';
import { LOGIN } from '../constants/routeNames';
import Login from '../screens/Login';
import Register from '../screens/Register';

const AuthNavigator = () =>{
    const AuthStack = createStackNavigator();
    return (
        <AuthStack.Navigator initialRouteName="Login">
            <AuthStack.Screen name ={LOGIN} component={Login}></AuthStack.Screen>
            <AuthStack.Screen name ={REGISTER} component={Register}></AuthStack.Screen>
        </AuthStack.Navigator>
    );
}

export default AuthNavigator;