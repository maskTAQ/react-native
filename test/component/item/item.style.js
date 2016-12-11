import {

	StyleSheet,

} from 'react-native';

export default itemStyle = StyleSheet.create({
	scrollerview:{
		flex:1,
		backgroundColor:'#fff',
	},
	row: {
		flexDirection:'row',
		height:60,
		borderBottomWidth:0.5,
		borderColor:'#ccc',
	},
	city:{
		flex:1,
		flexDirection:'row',
		alignItems: 'center',
		justifyContent:'center',
	},
	cityText:{
		flex:1,
		height:30,
		fontSize:14,
		textAlign:'center',
		color:'#2c2c2c',
		borderRightWidth:1,
		borderColor:'#ccc',
	},
	content:{
		flex:4,
		flexDirection:'column',
	},
	time:{
		flex:1,
		flexDirection:'row',
		alignItems: 'center',
		justifyContent:'center',
	},
	timeText:{
		flex:1,
		fontSize:12,
		marginLeft:10,
		textAlign:'left',
	},
	waterLevel:{
		flex:1,
		flexDirection:'row',
		alignItems: 'center',
		justifyContent:'center',
	},
	waterLevelText:{
		flex:1,
		marginLeft:10,
		color:'#000',
		fontSize:14,
		textAlign:'left',
	},
	status:{
		flex:1,
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
	},
	statusImg:{
		width:32,
		height:32,
	},
}
)