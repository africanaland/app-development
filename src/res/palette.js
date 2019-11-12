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
  text: {
    fontFamily: 'Sansation_Regular',
  },  
  textbold: {
    fontFamily: 'Sansation_Bold',
  },  

  button: {
    color: COLORS.white
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
};

export default PALETTE;
