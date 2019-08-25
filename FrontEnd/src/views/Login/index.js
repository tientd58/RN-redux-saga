import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import styles from './styles';

class LoginScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={[styles.container, {justifyContent: 'center', alignItems: 'center'}]}>
          <Text>login screen</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default LoginScreen;