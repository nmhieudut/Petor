import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import tailwind from 'tailwind-rn';
import { Input, Button } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Octicons';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  let error = false;
  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (size, color) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon
        size={size}
        color={color}
        name={secureTextEntry ? 'eye-closed' : 'eye'}
      />
    </TouchableWithoutFeedback>
  );

  const renderCaption = err => {
    return err ? (
      <View style={tailwind('py-2')}>
        <Text style={tailwind('text-red-500 text-sm')}>error</Text>
      </View>
    ) : null;
  };

  return (
    <ScrollView
      contentContainerStyle={tailwind('p-5 pt-10 justify-center items-center')}>
      {/* <Image
        source={require('../assets/rn-social-logo.png')}
        style={styles.logo}
      /> */}
      <Text style={[tailwind('text-3xl text-gray-700'), styles.title]}>
        Ashiba
      </Text>
      <Text style={tailwind('text-xl font-black my-4')}>
        Chào mừng bạn đã trở lại!
      </Text>
      <Text style={tailwind('mb-2.5')}>
        Nhập thông tin đăng nhập và bắt đầu khám phá nào
      </Text>
      <Input
        style={tailwind('mt-4')}
        value={username}
        label="User name"
        size="large"
        status={error && 'danger'}
        placeholder="Enter your user name"
        caption={() => renderCaption(error)}
        secureTextEntry={secureTextEntry}
        onChangeText={nextValue => setUsername(nextValue)}
      />
      <Input
        style={tailwind('my-4')}
        value={password}
        label="Password"
        size="large"
        status={error && 'danger'}
        placeholder="Enter your password"
        caption={() => renderCaption(error)}
        accessoryRight={() => renderIcon(24)}
        secureTextEntry={secureTextEntry}
        onChangeText={nextValue => setPassword(nextValue)}
      />

      {/* <FormButton
        buttonTitle="Sign In"
      /> */}
      <Button
        style={tailwind('m-2 w-full')}
        disabled={false}
        //    onPress={() => login(email, password)}
        //   accessoryLeft={LoadingIndicator}
      >
        Sign In
      </Button>
      <Text style={tailwind('font-bold my-1')}>OR</Text>
      <Button
        style={tailwind('m-2 w-full')}
        appearance="outline"
        onPress={() => navigation.navigate('Register')}>
        <Text style={tailwind('text-xl font-bold text-blue-500')}>
          Don't have an account? Create here
        </Text>
      </Button>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  title: {
    fontFamily: 'Kufam-SemiBoldItalic',
  },
});
