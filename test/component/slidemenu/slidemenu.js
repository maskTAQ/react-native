import React, {
	Component
} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	ListView,
	TouchableOpacity,
} from 'react-native';
import slideStyle from './slidemenu.style.js';

class ListItem extends Component {
	render() {
		let {
			url,
			title,
			index
		} = this.props.content;
		return (

			<View style={[slideStyle.itemBox,(index%2 == 0?slideStyle.itemBoxEven:slideStyle.itemBoxOdd)]}>
			<TouchableOpacity style={slideStyle.itemButton}>
				<Image source={{uri:'https://facebook.github.io/react/img/logo_og.png'}} style={slideStyle.itemImg}></Image>
				<Text style={slideStyle.itemText}>{title}</Text>
			</TouchableOpacity>
				
			</View>)
	}
}

export default class SlideMenu extends Component {
	createListData = () => {
		let initData = [{
			url: 'stack.png',
			title: 'Activity Feed'
		}, {
			url: 'anchor.png',
			title: 'My Challenges'
		}, {
			url: 'speechbubble.png',
			title: 'Discussions'
		}, {
			url: 'bargraph.png',
			title: 'My Stats'
		}, {
			url: 'head.png',
			title: 'My Connections'
		}, {
			url: 'star.png',
			title: 'Best Bets'
		}];
		initData.forEach((item, index) => {
			initData[index].url = '../images/' + item.url;
			initData[index].index = index + 1;
		})
		return initData;
	};
	constructor(props) {
		super(props);
		var ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		this.state = {
			dataSource: ds.cloneWithRows(this.createListData()),
		};
	}
	render() {
		return (
			<View style={slideStyle.slideContainer}>
			<View style={slideStyle.introduceBox}>
			<View style={slideStyle.iconBox}>
			<Image source={require('../images/image.png')} style={slideStyle.icon}></Image>
			</View>
			<View style={slideStyle.textBox}>
			<Text style={slideStyle.name}>Olia Gozha</Text>
			<Text style={slideStyle.detail}>BetRate:116</Text>
			</View>
			<View style={slideStyle.buttonBox}>
			<TouchableOpacity style={slideStyle.button}>
			<Image source={require('../images/create.png')}  style={slideStyle.buttonIcon}></Image>
			<Text style={slideStyle.buttonText}>CREATE CHALLENCE</Text>
			</TouchableOpacity>
			</View>
			</View>
			<View style={slideStyle.slideItem}>
 <ListView
      dataSource={this.state.dataSource}
      renderRow={(rowData) => <ListItem content={rowData}></ListItem>}
    />
			</View>
			</View>
		)
	}
}