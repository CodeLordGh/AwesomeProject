import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Login from './screens/Login'
import OnBording from './screens/OnBording';

const AppStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator 
        HeadMode="none"
        >
          <AppStack.Screen name="Onbording" component={OnBording} />
          <AppStack.Screen name="Login" component={Login} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default App;