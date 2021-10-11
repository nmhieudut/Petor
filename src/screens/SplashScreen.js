import LottieView from 'lottie-react-native';
import React from 'react';
import { Text, View } from 'react-native';
import tailwind from 'tailwind-rn';
export default function SplashScreen() {
  return (
    <View style={tailwind('items-center justify-center flex-1')}>
      <LottieView
        style={tailwind('w-80 h-80')}
        source={require('../assets/lotties/splash3.json')}
        autoPlay
        loop
      />
      <Text style={tailwind('text-lg my-4 italic font-bold')}>Loading...</Text>
    </View>
  );
}
