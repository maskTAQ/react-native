import React, { Component } from 'react';
import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';

import Charts from '../charts/charts.js';
import itemStyle from './item.style.js';
class ListRowComponent extends React.Component{
  waterLevelDetail(){
    this.props.topNavigator.push({
      name:'charts',
      component:Charts,
    });
  }
  showImg(){
    if(Math.random()>Math.random()){
      return (<Image source={require('../images/rise.png')} resizeMode={'contain'} style={itemStyle.statusImg}></Image>)
    }else{
      return (<Image source={require('../images/fall.png')} resizeMode={'contain'} style={itemStyle.statusImg}></Image>)
    }
  }
  render(){
   return (
    <View style={itemStyle.row}>
    <TouchableOpacity style={{flex:1,flexDirection:'row',}} activeOpacity={0.8} onPress={this.waterLevelDetail.bind(this)}>
    <View style={itemStyle.city}>
    <Text style={itemStyle.cityText}>{this.props.data.city}</Text>
    </View>
    <View style={itemStyle.content}>
    <View style={itemStyle.waterLevel}><Text  style={itemStyle.waterLevelText}>{this.props.data.waterLevel}</Text></View>
    <View style={itemStyle.time}><Text  style={itemStyle.timeText}>{this.props.data.time}</Text></View>
    </View>
    <View style={itemStyle.status}>
    {this.showImg()}
    </View>
    </TouchableOpacity>
    
    </View>
    );
 }
};
export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false,
      loaded: 0,
      rowData: Array.from(new Array(10)).map(
        (val, i) => ({
          city:'芜湖',
          waterLevel:i,
          key:i,
          time:'2016-11-21',
          status:'涨',
        })),
    };
  }

  render() {
    var rows = this.state.rowData.map((data,key) => {
     return <ListRowComponent key={key} data={data}  topNavigator={this.props.topNavigator}/>;
   });
    return (
      <ScrollView
      style={ itemStyle.scrollview}
      refreshControl={
        <RefreshControl
        refreshing={this.state.isRefreshing}
        onRefresh={this.onRefresh.bind(this)}
        tintColor="#ff0000"
        title="Loading..."
        titleColor="#00ff00"
        colors={['#ff0000', '#00ff00', '#0000ff']}
        progressBackgroundColor="#ffff00"
        />
      }>
      {rows}
      </ScrollView>
      );
  }
  onRefresh() {
    this.setState({isRefreshing: true});
    setTimeout(() => {
      // 准备下拉刷新的5条数据
      var rowNewData = Array.from(new Array(5))
      .map((val, i) => ({
        city:'芜湖',
        waterLevel:i,
        key:i,
        time:'2016-11-21',
        status:'涨',
      }))
      .concat(this.state.rowData);
      this.setState({
        loaded: this.state.loaded + 5,
        isRefreshing: false,
        rowData: rowNewData,
      });
    }, 2000);
  }

}

