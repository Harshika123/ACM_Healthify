
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
 tickcircle:{
     marginTop:'5%',
  marginLeft:'40%',
  alignItems:'center',
  paddingTop:'3%',
 height:'18%',
     width:'18%',
     borderColor:'#19B200',
     borderRadius:100,
     borderWidth:7
},
container: {
  flex: 1,
  justifyContent: 'flex-start',
  alignItems: 'center',
  margin: -Dimensions.get('window').width/2,
  backgroundColor:'#ffff'
},
icon:{
  position:'absolute',
  width:250,
  height:300,
 margin:100,
 marginTop:'90%',
 marginRight:'50%',
 marginLeft:'2%',
 paddingLeft:15,
 paddingBottom:50,
 paddingTop:2
},
box:{
  margin:'2%',
  height:'65%',
  width:'85%',
  paddingTop:20,
  backgroundColor:'#5C6CF9',
  borderRadius: 10,
  marginLeft: 27,
  marginRight:20,
},
button:{
    marginTop:'5%',
    marginLeft:'15%',
    backgroundColor:'#5C6CF9',
    width:'70%',
    height:'15%',
    borderRadius: 10,
    padding:10,
    paddingLeft:25
    },
    buttonText:{
        textAlign:'center',
       fontFamily:'Poppins-Regular',
       fontSize:20,
       color:'#ffff',
       
     },
inputname:{
      backgroundColor:'#ffff',
      borderWidth:1,
      borderColor:'#ffff',
      padding:8,
      margin: 20,
      width:250,
      height:50,
      borderRadius:10,
      marginLeft:'9%',
      marginTop:'5%',
      fontFamily:'Poppins-Regular',
      textAlign:'center',
    

},

smallrects:{
  flexDirection:'row',
  marginLeft:'15%',
},
smallrect1:{
margin: 5,
position:'relative',
  marginTop:'10%',
  marginLeft:'5%',
  marginBottom:'5%',
  bottom:'3%',
  width:50,
  height:10,
  borderRadius:10,
  backgroundColor:"#3DF81E"
},

smallrect3:{
margin: 5,
position:'relative',
  marginTop:'10%',
  marginLeft:'5%',
  marginBottom:'5%',
  bottom:'3%',
  width:50,
  height:10,
  borderRadius:10,
  backgroundColor:"#ffffff"
},
header:
{
  width:'100%',
  height:'100%'
},
titles:{
    
    marginTop:'60%',
    alignItems:'center',
    width:'100%'
},
title:{
   position: 'absolute', justifyContent: 'center', color: '#ffffff', top: "60%",
  marginTop:10,
  margin:95,
  alignItems: 'center',
  fontFamily:'Pacifico-Regular',
  fontSize:36,
  
  
},
style1:{
  height:50,
  position:'relative',
  marginBottom:'0%',
  paddingBottom:0
},
style2:{

  position:'relative',
  marginTop:'0%',
  paddingTop:'0%',
},
title1:{
  fontFamily: 'Poppins-Regular',
  fontSize:36,
  marginBottom:'0%',
  paddingBottom:0
},
title2:{
  marginTop:'0%',
  paddingTop:'0%',
  fontFamily: 'Poppins-Regular',
  fontSize:16
},
middleCircle:
{
  position:'relative',
  top: "60%",
  marginTop:'30%',
  marginLeft:'2%',
  paddingHorizontal: 8,
  paddingLeft:30,
  width: 50,
  height: 50,
  borderRadius: 50 ,
  backgroundColor: '#5C6CF9',

},
CircleShapeView: {
  position:'absolute',
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').width,
  borderRadius: Dimensions.get('window').width/2,
  backgroundColor: '#5C6CF9'
},
})



