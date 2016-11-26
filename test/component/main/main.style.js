import {
	StyleSheet,
	Dimensions
} from 'react-native';
let {
	height,
	width
} = Dimensions.get('window');
export default mainStyle = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		borderWidth: 1,
		borderColor: 'red',
	},
	tool: {
		height: 60,
		flexDirection: 'row',
		backgroundColor: '#fcf1db',
	},
	toolImg:{
		width: 36,
		overflow: 'hidden',
		backgroundColor: 'red',
	},
	toolTitle:{
		flex: 1,
		flexDirection: 'row',
		borderWidth: 1,
		borderColor: 'red',
	},
	toolAdd:{
		width: 36,
	},
	body:{
		flex:1,
		flexDirection:'column',
		borderWidth: 1,
		borderColor: 'red',
	},
	bodyContainer:{
		flex: 1,
	},
	bodyContent:{
		flex: 1,
	},
	bodyNav:{
		height:50,
		flexDirection:'row',
	},
	navItem:{
		flex:1,
		
	},
	navItemActive:{flex:1,backgroundColor:'red'},
})