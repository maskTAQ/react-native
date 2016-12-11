import React, {
	Component
} from 'react';
import {
	StyleSheet,
	Text,
	View,
	
	DrawerLayoutAndroid,
} from 'react-native';

import SlideMenu from '../../component/slidemenu/slidemenu.js';
import Main from '../../component/main/main.js';


export default class index extends Component {
	openDrawer=()=>{
		this.refs.drawer.openDrawer();
	};
	render() {
		return (<DrawerLayoutAndroid
			ref={'drawer'}
			drawerWidth={this.props.height>this.props.width?this.props.width*0.8:this.props.height*0.8}
			drawerPosition={DrawerLayoutAndroid.positions.Left}
			renderNavigationView={()=><SlideMenu></SlideMenu>}
			>

			<Main drawer={this.openDrawer} topNavigator={this.props.topNavigator} width={this.props.width} height={this.props.height}></Main>

			</DrawerLayoutAndroid>)
	}

}
