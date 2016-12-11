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
		height:60,
		flexDirection: 'column',
		justifyContent: 'center',
	},
	tool: {
		height: 60,
		flexDirection: 'row',
		backgroundColor: '#2f3d4c',
	},
	toolImg:{
		width: 36,
		height:36,
		marginTop:12,
		marginLeft:14,
	},
	toolTitleBox:{
		flex: 1,
		justifyContent:'center',
	},
	toolTitle:{
		fontSize:20,
		color:'#fff',
		textAlign:'center',
	},
	toolAdd:{
		width: 36,
		marginRight:14,
	},
	body:{
		flex:1,
		flexDirection:'column',
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
		backgroundColor:'#2f3d4c',
	},
	buttonBoxActive:{
		flex:1,
		height:42,
		marginTop:4,
		marginLeft:4,
		marginBottom:4,
		marginRight:4,
		flexDirection:'row',
		backgroundColor:'#ff7f66',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius:4,
	},
	buttonBox:{
		flex:1,
		height:42,
		marginTop:4,
		marginLeft:4,
		marginBottom:4,
		marginRight:4,
		flexDirection:'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonImg:{
		width:20,
		height:20,
	},
	buttonText:{
		width:width*.2,
		textAlign:'center',
		fontSize:16,
		letterSpacing:4,
		color:'#fff',
	},
	

})