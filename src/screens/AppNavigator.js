import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import EIcon from 'react-native-vector-icons/Entypo';
import tailwind from 'tailwind-rn';
import LoginScreen from './Auth/LoginScreen';
import RegisterScreen from './Auth/RegisterScreen';
import OnboardingScreen from './OnboardingScreen';
import SplashScreen from './SplashScreen';

const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;

const AuthenticationStackNavigator = () => {
  // const loggedInUser = useSelector((state) => state.authReducer.loggedInUser);
  // const dispatch = useDispatch();
  const [splashLoading, setSplashLoading] = useState(true);
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    setTimeout(() => setSplashLoading(false), 5000);
  }, []);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);
  let routeName;
  if (isFirstLaunch === null) {
    return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
  } else if (isFirstLaunch === true) {
    routeName = 'Onboarding';
  } else {
    routeName = 'Login';
  }

  if (splashLoading) {
    return <SplashScreen />;
  }
  return (
    <Navigator initialRouteName={routeName}>
      <Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ header: () => null }}
      />
      <Screen
        name="Login"
        component={LoginScreen}
        options={{ header: () => null }}
      />
      <Screen
        name="Register"
        component={RegisterScreen}
        options={({ navigation }) => ({
          title: 'Create an account',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0,
          },
          headerLeft: () => (
            <View style={tailwind('ml-2.5')}>
              <EIcon
                name="arrow-long-left"
                size={25}
                backgroundColor="#f9fafd"
                color="#333"
                onPress={() => navigation.navigate('Login')}
              />
            </View>
          ),
        })}
      />
    </Navigator>
  );
};
// };

export default function AppNavigator() {
  return (
    <NavigationContainer style={styles.main}>
      <AuthenticationStackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  main: {
    fontFamily: 'Lato-Regular',
  },
});
