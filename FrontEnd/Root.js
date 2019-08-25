import React from 'react';
import { Platform, StatusBar, View, StyleSheet, Text } from 'react-native';

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
        {Platform.OS === 'ios' && <StatusBar barStyle="light-content" translucent={true} />}
        <AppNavigator />
      </View>
    );
  }
}

export default RootContainer;
