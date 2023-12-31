import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Login from './screens/Login'
import OnBording from './screens/OnBording';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppStack = createStackNavigator();

const App = () => {
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
    return (
      <NavigationContainer>
      <AppStack.Navigator 
        HeaderMode="none"
        >
          <AppStack.Screen name="Onbording" component={OnBording} />
          <AppStack.Screen name="Login" component={Login} />
      </AppStack.Navigator>
    </NavigationContainer>
    )
  } else {
    return <Login />;
  }

}

export default App;