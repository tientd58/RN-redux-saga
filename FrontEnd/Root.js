import React from 'react';
import { Platform, StatusBar, View, StyleSheet } from 'react-native';

import AppNavigator from './src/navigator/AppNavigator';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

class RootContainer extends React.PureComponent {
  
  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="light-content" translucent />}
        <AppNavigator />
      </View>
    );
  }
}

export default RootContainer;
