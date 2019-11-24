import { Dimensions, Platform } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import COLORS from './colors';
import { redBright } from 'colorette';
import leftPad from 'left-pad';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const PALETTE = {
  login: {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      paddingLeft: 18,
      paddingRight: 18,
    }, 
    LogoStyle:{
      width: height/4,
      height: height/4,
      marginBottom: 20,
    },
    hr : {
      height: 3,
      backgroundColor: COLORS.hrgrey,
      width:"40%",      
      justifyContent: 'flex-end',
    },
    
    forgotpasswordtext: {
      fontSize:14,
      marginTop:15,
      marginBottom:15,
    },
  
    ortext: {
      fontWeight: "800",
      fontSize:14,
      marginTop:15,
      marginBottom:15,
    },

    language:{
      textAlign: "right",
      width: "100%",
    },
    topcontent:{
      width: "100%",
      textAlign: "right",
      marginTop:10,
      marginBottom:10
    },
    maincontent:{
      flex:8,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    bottomcontent:{
      flex:1,
      width: "100%",
      alignItems: "center"
    }
  },

  register: {
    acceptterm:{

    },
    tc:{
      color: COLORS.maincolor
    },
    termview:{
      marginTop:6,
    },
    acceptview:{
      textAlign: "left",
      width: "100%",
      marginTop:15,
      marginBottom:15,
    }
  },

  homepage: {
    bottom : {
      marginBottom: 20,
      shadowColor:"#f00",
      shadowOffset:{width:0, height:4},
      shadowOpacity:0.4,
      elevation: 4,
    },
    shadow: {
      shadowColor:"#f00",
      shadowOffset:{width:0, height:4},
      shadowOpacity:0.4,
      elevation: 4,
    },
    searchmodal: {
      backgroundColor: COLORS.white,
      borderWidth: 1,
      borderRadius: 2,
    },
    
    hr : {
      height: 1,
      backgroundColor: COLORS.hrgrey,
      width:"100%",      
      justifyContent: 'flex-end',
      marginTop:10,
      marginBottom:10,
    },
  },

  text: {
    fontFamily: 'Sansation_Regular',
  },  
  textbold: {
    fontFamily: 'Sansation_Bold',
  },  

  button: {
    color: COLORS.white
  },
  icontext: {
    fontFamily: 'Font Awesome 5 Free-Solid-900', 
    fontWeight: "100",
  }, 
  row: {
    flexDirection: 'row',
    width: "100%"
  },
  primaryCenter: {
    justifyContent: 'center',
  },
  primaryBetween: {
    justifyContent: 'space-between',
  },
  primaryEnd: {
    justifyContent: 'flex-end',
  },
  secondaryCenter: {
    alignItems: 'center',
  },
  secondaryEnd: {
    alignItems: 'flex-end',
  },
  
  f1: {
    flex: 1,
  },
  
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  menubar: {
    marginTop:20,
  },
  shadowbutton:{
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13}
  },
  avatar:{
    width:90, 
    height:90,
    borderRadius:100,
    borderWidth:5, 
    borderColor:COLORS.avatarbordercolor
  },
  navigatorbackground:{
    width:width*0.8, 
    height:width*0.8*(497/982)
  },
  navigatorprofile:{
    position:"absolute", 
    width:"100%",  
    height:width*0.8*(497/982), 
    paddingLeft:15, 
    justifyContent:"center",
  },
  aligncentermiddle:{
    height:"100%",
    justifyContent:"center", 
    alignItems:"center"
  },
  alignleftmiddle:{
    height:"100%",
    justifyContent:"center"
  },
  txtprofilename:{
    fontSize:16,
    color:COLORS.white,
    marginBottom: 5
  },
  txtprofiletitle:{
    fontSize:14,
    color:COLORS.white,
  },
  txtprofilecontent:{
    fontSize:14,
    color:COLORS.white,
    marginBottom:5
  },
  profile:{
    marginLeft:20,
  },
  imageicon:{
    width:25,
    height:25,
  },
  navigatorbottom: {
    height:100,
    
    alignItems:"center",   
    borderTopWidth: 3,
    borderTopColor: COLORS.hrgrey,
  },
  txtnavigatorbottom: {
    flex:1,
    
    flexDirection: 'row',
    textAlign:"center", 
    width:"100%", 
    alignItems:"center", 
    justifyContent: "center",
  },
  navigatorscrollview: {
    flex: 1
  },
  icon: {
    width:25, 
    height:undefined,
    aspectRatio: 56 / 54,
  },
};

export default PALETTE;
