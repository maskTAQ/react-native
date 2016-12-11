import React ,{Component}from 'react';
import {
	View,
	Navigator,
	StyleSheet,
	Text,
	ActivityIndicator,
} from 'react-native';
import Item from './item';

export default class Loading extends Component{
	constructor(props){
		super(props);
		let _this= this;
		setTimeout(function(){_this.getItemPage()},10)
	}
	getItemPage(){
		this.props.navigator.replace({
			name:'item',
			component:Item
		});
	}
	render(){

		return(<View style={loading.loadingContainer}>
			<ActivityIndicator size={'large'}></ActivityIndicator>
			<Text style={loading.loadingText}>数据加载中...</Text>
			</View>)
	}
}

let loading = StyleSheet.create({
	loadingContainer:{
		flex:1,
		flexDirection:'column',
		justifyContent: 'center',
		borderColor:'green',
	},
	border:{
		borderWidth:1,
		borderColor:'green',

	},
	loadingText:{
		fontSize:14,
		height:60,
		lineHeight:30,
		textAlign:'center'
	}
})