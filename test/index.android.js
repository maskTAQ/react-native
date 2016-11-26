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
class s extends Component {
  openDrawer=()=>{
   this.refs.drawer.openDrawer();
  };
  render() {
    return (<DrawerLayoutAndroid
      ref={'drawer'}
      drawerWidth={width*0.8}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      renderNavigationView={()=><SlideMenu></SlideMenu>}
      >
     
      <Main drawer={this.openDrawer}></Main>

      </DrawerLayoutAndroid>)
  }
  componentDidMount() {

  }
}

AppRegistry.registerComponent('s', () => s);