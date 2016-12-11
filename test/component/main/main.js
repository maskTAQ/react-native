import React, {
	Component
} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	ListView,
	StatusBar,
	ToolbarAndroid,
	TouchableOpacity,
	ViewPagerAndroid,
} from 'react-native';
import ItemContainer from  '../item/itemContainer';
import mainStyle from './main.style.js';
export default class Main extends Component {
	 onPageSelected=(e)=>{
		this.setState({
			page: e.nativeEvent.position,
			title:e.nativeEvent.position===0?'水位':'天气',
		});
	};
	onPageClick=(i)=>{
		this.setState({
			page: i,
			title:i===0?'水位':'天气',
		});
		this.refs.viewPage.setPage(i)
	};
	constructor(props) {
		super(props);
		this.state = {
			page: 0,
			title:'水位',
		};
	}

	render() {
		let page = this.state.page;
		return (<View style={mainStyle.container}>
				<View style={mainStyle.tool}>
					<TouchableOpacity  onPress={()=>{this.props.drawer()}} style={mainStyle.toolImg}>
						<Image source={require('../images/nav.png')} resizeMode={'contain'} style={{flex:1,}}></Image>
					</TouchableOpacity>
					
					<View style={mainStyle.toolTitleBox}><Text style={mainStyle.toolTitle}>{this.state.title}</Text></View>
					<View style={mainStyle.toolAdd}></View>
				</View>
				<View style={mainStyle.body}>
					<ViewPagerAndroid  
					ref={'viewPage'}
					style={mainStyle.bodyContainer}
					 onPageSelected={this.onPageSelected}
					  initialpage={0}
					>
						<View style={mainStyle.bodyContent}><ItemContainer topNavigator={this.props.topNavigator} width={this.props.width} width={this.props.height}></ItemContainer></View>
						<View style={mainStyle.bodyContent}><Text>2</Text></View>
					</ViewPagerAndroid>
					<View style={mainStyle.bodyNav}>
						<TouchableOpacity style={mainStyle.navItem} onPress={()=>{this.onPageClick(0)}} activeOpacity={1}>
						<View  style={page==0?mainStyle.buttonBoxActive:mainStyle.buttonBox}>
						<Image  source={require('../images/water.png')} style={mainStyle.buttonImg}></Image>
						<Text style={mainStyle.buttonText}>水位</Text>
						</View>
						</TouchableOpacity>
                        				<TouchableOpacity style={mainStyle.navItem} onPress={()=>{this.onPageClick(1)}} activeOpacity={1}>
                        				<View  style={page==1?mainStyle.buttonBoxActive:mainStyle.buttonBox}>
                        				<Image source={require('../images/weather.png')} style={mainStyle.buttonImg}></Image>
						<Text style={mainStyle.buttonText}>天气</Text>
						</View>
						</TouchableOpacity>
					</View>
				</View>
			</View>)
	}
}