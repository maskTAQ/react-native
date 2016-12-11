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
  StatusBar,
  Navigator,
  ToastAndroid,
  BackAndroid,
  NativeModules,
 
} from 'react-native';

let {
  height,
  width
} = Dimensions.get('window');

let Orientation =NativeModules.Orientation;
import index from './component/drawer/drawer.js'
class s extends Component {

  onBackAndroid = () => {

               if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {//最近2秒内按过back键，可以退出应用。

                 

                return false;

            }

    this.lastBackPressed = Date.now();

    ToastAndroid.show('双击退出应用', ToastAndroid.SHORT);

    return true;

  }
  componentWillMount(){

    Orientation.lockToPortrait();
             BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);

  }

  componentWillUnmount() {

             BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);

  }


  render() {
    return (
      <Navigator 
      style={{flex:1}}
      initialRoute={{name:'drawer',component: index}}
      configureScene={(route) => {
        return Navigator.SceneConfigs.PushFromRight;
      }}
      renderScene={(route, navigator) =>{
        let Component = route.component;
        return (<route.component topNavigator={navigator} width={width} height={height}/>)
      }}
      />)
      }

    }

    AppRegistry.registerComponent('s', () => s);