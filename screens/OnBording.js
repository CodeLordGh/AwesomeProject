import React from 'react'
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';


const OnBording = ({navigation}) => {
    return (
      <Onboarding
      pages={[
        {
          backgroundColor: '#3070d9',
          image: <Image source={require('../assets/onboarding-img1.png')} />,
          title: 'Connect to the world of Design',
          //subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#c687ed',
          image: <Image source={require('../assets/onboarding-img2.png')} />,
          title: 'Meet best Designers for your Clothes',
          //subtitle: 'Done with React Native Onboarding Swiper',
        },      
        {
          backgroundColor: '#5aed75',
          image: <Image source={require('../assets/onboarding-img3.png')} />,
          title: 'Order with simplicity',
          //subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
      );
}

export default OnBording;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });