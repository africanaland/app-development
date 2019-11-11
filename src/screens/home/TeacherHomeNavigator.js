import { createStackNavigator } from 'react-navigation-stack';
// import VicePresidentMainScreen from './main/VicePresidentMainScreen';
import TeacherMainScreen from './main/TeacherMainScreen';
import AlertScreen from './alert/AlertScreen';
import SettingsScreen from './settings/SettingsScreen';
import SearchScreen from './search/SearchScreen';
import ProfileScreen from './profile/ProfileScreen';
import OutofSchoolScreen from './outofschool/OutofSchoolScreen';
import WarningScreen from './warning/WarningScreen';

const routeConfig = {
  TeacherMainScreen: {
    screen: TeacherMainScreen,
  },
  SearchScreen: {
    screen: SearchScreen,
  },
  AlertScreen: {
    screen: AlertScreen,
  },
  SettingsScreen: {
    screen: SettingsScreen,
  },
  ProfileScreen: {
    screen: ProfileScreen,
  },
  OutofSchoolScreen: {
    screen: OutofSchoolScreen,
  },
  WarningScreen: {
    screen: WarningScreen,
  },
  // VicePresidentMainScreen: {
  //   screen: VicePresidentMainScreen,
  // },
};

const navigatorConfig = {
  headerMode: 'none',
};

const TeacherHomeNavigator = createStackNavigator(routeConfig, navigatorConfig);

export default TeacherHomeNavigator;
