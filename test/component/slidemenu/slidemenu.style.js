import {
	StyleSheet,
	Dimensions
} from 'react-native';
let {
	height,
	width
} = Dimensions.get('window');
export default slideStyle = StyleSheet.create({
	slideContainer: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#2f3d4c',
	},
	border: {
		borderWidth: 1,
		borderColor: 'red',
	},
	introduceBox: {
		flex: 5,
		flexDirection: 'column',
	},
	iconBox: {
		flex: 2.2,
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'center',

	},
	icon: {
		width: 100,
		height: 100,
		borderRadius: 100,
		overflow: 'hidden',
		resizeMode: 'cover',
		borderWidth: 3,
		borderColor: '#ff7f66',
	},
	textBox: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	name: {
		fontSize: 22,
		fontFamily: 'Lato',
		color: 'rgb(135, 147, 160)',
		fontWeight: 'bold',
	},
	detail: {
		fontSize: 14,
		fontFamily: 'Lato',
		color: 'rgb(135, 147, 160)',
	},
	buttonBox: {
		flex: 1.8,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonIcon: {
		width: 15,
		height: 15,
	},
	buttonText: {
		fontSize: 15,
		color: '#fff',
		marginLeft: 6,
	},
	button: {
		width: width * 0.8 * 0.8,
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 4,
		backgroundColor: '#ff7f66',
	},
	slideItem: {
		flex: 6.3,
		flexDirection: 'column',
	},
	itemBox: {
		height: 50,
	},
	itemBoxOdd: {
		backgroundColor: '#2a3744',
	},
	itemBoxEven: {

	},
	itemButton: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	itemImg: {
		width: 20,
		height: 20,
		resizeMode: 'cover',
		marginLeft: width * 0.8 * 0.1,
		marginRight: width * 0.8 * 0.04,
	},
	itemText: {
		fontSize: 17,
		color: 'rgb(252, 241, 223)',
		fontFamily: 'Lato'
	},
})