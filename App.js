
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen';
import MainApp from './src/App';
export default class App extends Component {
    componentDidMount() 
    {
        SplashScreen.hide();
    }

  render() {
    return (
      <MainApp />
    );
  }
}
