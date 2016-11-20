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
		flexDirection: 'row',
		borderWidth: 1,
		borderColor: 'red',
	},
	tool: {
		height: 20,
		borderWidth: 1,
		borderColor: 'red',
	},
})