/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  AppRegistry,
  DrawerLayoutAndroid,
  StyleSheet,
  Dimensions,
  Text,
  View,
  StatusBar
} from 'react-native';

let {
  height,
  width
} = Dimensions.get('window');

import SlideMenu from './component/slidemenu/slidemenu.js';
import Main from './component/main/main.js';
class test extends Component {

  render() {
    return (<DrawerLayoutAndroid
    ref={'box'}
      drawerWidth={width*0.8}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      renderNavigationView={()=><SlideMenu></SlideMenu>}
      >
     
      <Main></Main>

      </DrawerLayoutAndroid>)
  }
  componentDidMount() {

  }
}

AppRegistry.registerComponent('test', () => test);