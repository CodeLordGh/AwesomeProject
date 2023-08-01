import React, { useEffect } from 'react';
//import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Login from './screens/Login'
import OnBording from './screens/OnBording';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

  useEffect(() => {
    AsyncStorage .getItem('alreadyLaunched').then(value => {
      if(value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      }else {
        setIsFirstLaunch(false);
      }
    })
  },[])

  if (isFirstLaunch == null) {
    return null;
  }else if (isFirstLaunch == true){
    routeName = 'Onbording'
  } else {
    routeName = 'Login';
  }

  return (
    <Stack.Navigator initialRouteName={routeName}>
        <Stack.Screen
           name='Onbording'
           component={OnBording} 
           options={{header: () => null}}
           />
        <Stack.Screen
            name={Login}
            component={Login}
            options={{header: () => null}}
        />
        <Stack.Screen name='Signup' component={SignupScreen} />
    </Stack.Navigator>
  )

}

export default AuthStack;