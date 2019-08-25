import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthLoading from './AuthLoading';
import HomeStack from './HomeStack';
import AuthStack from './AuthStack';
import { NavigationRoutes } from './Routes';

export default createAppContainer(
  createSwitchNavigator({
    AuthLoading,
    AuthStack,
    HomeStack
  },{
    initialRouteName: NavigationRoutes.AuthLoading
  })
);