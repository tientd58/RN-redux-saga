import React from 'react';
import { View, StyleSheet } from 'react-native';

import CircleLoading from '../components/Presentations/CircleLoading';
import { colors } from '../modules/colors';
import { StorageKey, Storage } from '../modules/utils/storage';
import { NavigationRoutes } from './Routes';
import Responsive from '../modules/utils/responsive';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.MAIN_BACKGROUND,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingContainer: {
    width: Responsive.h(70),
    height: Responsive.h(70),
    borderRadius: Responsive.h(5),
    backgroundColor: colors.BLUE,
  },
});

class AuthLoading extends React.PureComponent {
  constructor(props) {
    super(props);
    this.checkAuthencation();
  }

  checkAuthencation = async () => {
    const { navigation } = this.props;
    const authToken = await Storage.get(StorageKey.AuthToken);
    if (authToken === null) {
      navigation.navigate(NavigationRoutes.AuthStack);
    } else {
      navigation.navigate(NavigationRoutes.Home);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <CircleLoading isVisible={true} />
      </View>
    );
  }
}

export default AuthLoading;
