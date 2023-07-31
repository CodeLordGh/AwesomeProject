import React from 'react'
import { Button, Text, View, StyleSheet } from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text>Login!</Text>
      <Button
        title='Click Here'
        onPress={() => alert('Button Clicked')}
      />
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });