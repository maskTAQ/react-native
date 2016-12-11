import React, {
	Component
} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Dimensions,
	DrawerLayoutAndroid,
	TouchableOpacity,
	BackAndroid,
	NativeModules,
} from 'react-native';
import Echarts from 'native-echarts';
import chartsStyle from './charts.style.js';

let Orientation =NativeModules.Orientation;
export default class charts extends Component{
	componentWillMount() {

		Orientation.lockToLandscape();
	}
	componentDidMount(){ 
		let that =  this;
		BackAndroid.addEventListener('hardwareBackPress', function() {
			that.props.topNavigator.popToTop();
			return true;//返回true阻止默认事件
		});

	} 
	render(){
		const data = {
			"2016-11-26": "174.33",
			"2016-11-25": "174.08",
			"2016-11-24": "173.97",
			"2016-11-23": "173.90",
			"2016-11-22": "173.91",
			"2016-11-21": "173.90",
			"2016-11-20": "173.90"
		};
		let xValue=Object.keys(data);
		let yValue = Object.values(data);
		const option = {
			
			tooltip: {
				trigger: 'axis'
			},

			grid: {
				left: '3%',
				right: '4%',
				top:'4%',
				bottom: '10%',
				containLabel: true
			},
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: xValue
			},
			yAxis: {
				type: 'value',
				scale:true
			},
			series: [
			{
				name:'水位',
				type:'line',
				stack: '总量',
				data:yValue,
				smooth:true,
				animationDelayUpdate:3000,
				animationDurationUpdate:3000,
			}
			]
		};
		return( <View style={chartsStyle.container}>
			<View style={chartsStyle.nav}>
			<TouchableOpacity  style={chartsStyle.return} onPress={this.returnNav.bind(this)}>
			<Image source={require('../images/return.png')} resizeMode={'contain'} style={chartsStyle.returnImg}></Image>
			</TouchableOpacity>
			<View style={chartsStyle.titleBox}><Text style={chartsStyle.title}>芜湖水位</Text></View>
			</View>
			<View style={chartsStyle.charts}>
			<Echarts option={option} style={{flex:1}} height={this.props.width>this.props.height?this.props.height-42:this.props.width-42}/>
			</View>
			</View>)
	}
	returnNav(){
		this.props.topNavigator.popToTop();
	}
	componentWillUnmount(){
		BackAndroid.removeEventListener();
	}
	componentWillUnmount(){
		Orientation.lockToPortrait();
	}
}
