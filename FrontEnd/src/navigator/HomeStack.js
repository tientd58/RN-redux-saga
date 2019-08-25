import { createStackNavigator } from 'react-navigation';

import { NavigationRoutes } from './Routes';
import HomeScreen from '../views/Home';

const HomeStack = createStackNavigator(
  {
    [NavigationRoutes.Home]: {
      screen: HomeScreen
    }
  },
  {
    initialRouteName: NavigationRoutes.Home,
    headerMode: 'screen',
    navigationOptions: {
      gesturesEnabled: false,
    },
  }
);

const HomeRootScreen = createStackNavigator(
  {
    [NavigationRoutes.Home]: {
      screen: HomeStack
    }
  },
  {
    initialRouteName: NavigationRoutes.Home,
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    },
  }
);

export default HomeRootScreen;