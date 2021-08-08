import React, {useContext} from 'react';

import {LogBox } from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import { GlobalContext } from '../context/Provider';


const AppNavContainer = () => {

    const {authState:{isLoggedIn}} = useContext(GlobalContext);

    console.log('isLoggedIn :>>',isLoggedIn);
    return (
        <NavigationContainer>
        {isLoggedIn ? <DrawerNavigator/> : <AuthNavigator/>}
        </NavigationContainer>
    );
}

export default AppNavContainer;