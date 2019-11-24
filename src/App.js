// import StorybookUI from '../storybook';

// export default StorybookUI;

import React from 'react';
import { Image, View, Text, StyleSheet, Dimensions } from 'react-native';
import { Container, Header, Body } from 'react-base';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
// Navigators
import MainNavigator from './screens/MainNavigator';
import Login from './components/Login';
import Register from './components/Register';
import HomeScreen from './components/Homescreen';
import Booking from './components/Booking';
import Messages from './components/Messages';
import Notifications from './components/Notifications';
import Wallet from './components/Wallet';
import Favorites from './components/Favorites';
import Offers from './components/Offers';
import GuestCare from './components/GuestCare';
import Settings from './components/Settings';
import { ScrollView } from 'react-native-gesture-handler';
import SafeAreaView from 'react-native-safe-area-view';

const {width, height} = Dimensions.get('window');

import R from 'res/R';
import pluralize from 'jest-util/build/pluralize';
const { PALETTE, COLORS } = R;

const AppNavigator = createStackNavigator(
  {
    MainNavigator: MainNavigator
  },
  {
    headerMode: 'none',
    initialRouteName: 'MainNavigator',
  },
);
const CustomDrawerContentComponent = props => {
  return (
    <SafeAreaView>   
      <View style={{height:"100%"}}>
        <Image style={[PALETTE.navigatorbackground]} source = {require("./res/images/option/option.png")} />
        <View style={[PALETTE.navigatorprofile]}>
          <View style={[PALETTE.row]}>
            <View style={[PALETTE.aligncentermiddle]}>
              <Image style={[PALETTE.avatar,{}]} source = {require("./res/images/avatar.jpg")} />
            </View>
            <View style={[PALETTE.textbold, PALETTE.alignleftmiddle, PALETTE.profile]}>
              <Text style={[PALETTE.textbold, PALETTE.txtprofilename]}>John Doe</Text>
              <Text style={[PALETTE.textbold, PALETTE.txtprofiletitle]}>Guest ID</Text>
              <Text style={[PALETTE.txtprofilecontent]}>21721354632</Text>
              <Text style={[PALETTE.textbold, PALETTE.txtprofiletitle]}>Username</Text>
              <Text style={[PALETTE.txtprofilecontent]}>John123</Text>
              <Text style={[PALETTE.textbold, PALETTE.txtprofiletitle]}>Class</Text>
              <Text style={[PALETTE.txtprofilecontent]}>Classic Guest</Text>
            </View>
          </View>
        </View>
        <ScrollView style={[PALETTE.navigatorscrollview]}>
          <DrawerItems {...props} />  
        </ScrollView> 
        <View style={[PALETTE.navigatorbottom]}>
          <View style={[ PALETTE.txtnavigatorbottom, PALETTE.row]}>            
              <Image style={[PALETTE.imageicon]} source = {require("./res/images/icons/option/option_38.png")} />
              <Text style={[PALETTE.textbold]}>&nbsp;&nbsp;Become a Host</Text>
          </View>
        </View>
      </View>  
    </SafeAreaView>
)};
const islogin = false;
const navigator = createDrawerNavigator(
  {
    Login:{
      screen: Login,
      navigationOptions: ({navigation}) => ({
        drawerLockMode: 'locked-closed',
        drawerLabel: () => null
      })
    },
    Register:{
      screen: Register,
      navigationOptions: ({navigation}) => ({
        drawerLockMode: 'locked-closed',
        drawerLabel: () => null
      })
    },
    HomeScreen:{      
      screen: HomeScreen,
      navigationOptions: ({navigation}) => ({
        drawerIcon: ({focused}) =>(<Image style={[PALETTE.icon]} source = {require("./res/images/icons/option/option_05.png")}/>)
      })
    },    
    Booking:{      
      screen: Booking,
      navigationOptions: ({navigation}) => ({
        drawerIcon: ({focused}) =>(<Image style={[PALETTE.icon]} source = {require("./res/images/icons/option/option_05.png")}/>)
      })
    },
    Messages:{      
      screen: Messages,
      navigationOptions: ({navigation}) => ({
        drawerIcon: ({focused}) =>(<Image style={[PALETTE.icon]} source = {require("./res/images/icons/option/option_12.png")}/>)
      })
    },
    Notifications:{      
      screen: Notifications,
      navigationOptions: ({navigation}) => ({
        drawerIcon: ({focused}) =>(<Image style={[PALETTE.icon]} source = {require("./res/images/icons/option/option_16.png")}/>)
      })
    },
    Wallet:{      
      screen: Wallet,
      navigationOptions: ({navigation}) => ({
        drawerIcon: ({focused}) =>(<Image style={[PALETTE.icon]} source = {require("./res/images/icons/option/option_19.png")}/>)
      })
    },
    Favorites:{      
      screen: Favorites,
      navigationOptions: ({navigation}) => ({
        drawerIcon: ({focused}) =>(<Image style={[PALETTE.icon]} source = {require("./res/images/icons/option/option_23.png")}/>)
      })
    },
    Offers:{      
      screen: Offers,
      navigationOptions: ({navigation}) => ({
        drawerIcon: ({focused}) =>(<Image style={[PALETTE.icon]} source = {require("./res/images/icons/option/option_27.png")}/>)
      })
    },
    GuestCare:{      
      screen: GuestCare,
      navigationOptions: ({navigation}) => ({
        drawerIcon: ({focused}) =>(<Image style={[PALETTE.icon]} source = {require("./res/images/icons/option/option_31.png")}/>)
      })
    },
    Settings:{      
      screen: Settings,
      navigationOptions: ({navigation}) => ({
        drawerIcon: ({focused}) =>(<Image style={[PALETTE.icon]} source = {require("./res/images/icons/option/option_35.png")}/>)
      })
    },
  },{
    contentComponent: CustomDrawerContentComponent,
    drawerWidth: "80%",
    initialRouteName : (islogin?"HomeScreen":"Login")
  }
)

export default createAppContainer(navigator);
