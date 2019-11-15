import { createStackNavigator } from 'react-navigation-stack';
import Login from '../components/Login';
import Register from '../components/Register';
import HomeScreen from '../components/Homescreen';
const routeConfig = {
  Login: {
    screen: Login,
  },
  Register: {
    screen: Register,
  },
  HomeScreen: {
    screen: HomeScreen,
  }
};

const navigatorConfig = {
  headerMode: 'none',
};

const MainNavigator = createStackNavigator(routeConfig, navigatorConfig);

export default MainNavigator;
