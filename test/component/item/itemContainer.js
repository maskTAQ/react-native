import React ,{Component}from 'react';
import {
	View,
	Navigator
} from 'react-native';
import Loading from  './loading';
export default class Item extends Component{
	render(){
		return(<Navigator 
			style={{flex:1}}
			initialRoute={{name:'load',component: Loading}}
			configureScene={(route) => {
				return Navigator.SceneConfigs.FadeAndroid;
			}}
			renderScene={(route, navigator) =>{
				let Component = route.component;
				return (<route.component navigator={navigator} topNavigator={this.props.topNavigator} width={this.props.width}  height={this.props.height}/>)
			}}
			/>)
	}
}