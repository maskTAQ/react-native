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
} from 'react-native';
import mainStyle from './main.style.js';
export default class Main extends Component {
	onActionSelected = () => {
		alert(1);
	};
	render() {
		return (<View style={mainStyle.container}>
			<StatusBar
                    animated={true}
                    hidden={false}
                    backgroundColor={'blue'}
                    translucent={true}
                    barStyle={'default'}
                    showHideTransition={'fade'}
                    networkActivityIndicatorVisible={true}
                /></View>)
	}
}