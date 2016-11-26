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
import mainStyle from './main.style.js';
export default class Main extends Component {
	 onPageSelected=(e)=>{
		this.setState({
			page: e.nativeEvent.position
		});
		console.log(this.state)
	};
	onPageClick=(i)=>{
		this.setState({
			page: i
		});
		this.refs.viewPage.setPage(i)
		console.log(this.state)
	};
	constructor(props) {
		super(props);
		this.state = {
			page: 0,
		};
	}

	render() {
		let page = this.state.page;
		return (<View style={mainStyle.container}>
				<View style={mainStyle.tool}>
					<TouchableOpacity  onPress={()=>{this.props.drawer()}} style={mainStyle.toolImg}>
						<Image source={require('../images/head.png')} style={{flex:1,}}></Image>
					</TouchableOpacity>
					
					<Text style={mainStyle.toolTitle}>title</Text>
					<View style={mainStyle.toolAdd}></View>
				</View>
				<View style={mainStyle.body}>
					<ViewPagerAndroid  
					ref={'viewPage'}
					style={mainStyle.bodyContainer}
					 onPageSelected={this.onPageSelected}
					  initialpage={0}
					>
						<View style={mainStyle.bodyContent}><Text>1</Text></View>
						<View style={mainStyle.bodyContent}><Text>2</Text></View>
					</ViewPagerAndroid>
					<View style={mainStyle.bodyNav}>
						<TouchableOpacity style={page==0?mainStyle.navItemActive:mainStyle.navItem} onPress={()=>{this.onPageClick(0)}}/>
                        				<TouchableOpacity style={page==1?mainStyle.navItemActive:mainStyle.navItem} onPress={()=>{this.onPageClick(1)}}/>
					</View>
				</View>
			</View>)
	}
}