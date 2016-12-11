import {
	StyleSheet,
	
} from 'react-native';

export default chartsStyle = StyleSheet.create({
	container:{
		flex:1,
		flexDirection:'column',
	},
	nav:{
		height:40,
		flexDirection:'row',
		borderWidth:1,
		backgroundColor:'#2f3d4c'
	},
	return:{
		width:60,
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
		
	},
	returnImg:{
		width:24,
		height:24,
	},
	titleBox:{
		flex:1,
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
		marginTop:8,
		marginBottom:8,
		borderLeftWidth:1,
		borderColor:'#fff',
		paddingLeft:14,
	},
	title:{
		flex:1,
		fontSize:14,
		color:"#fff",
	},
	charts:{
		flex:1,
	}
})