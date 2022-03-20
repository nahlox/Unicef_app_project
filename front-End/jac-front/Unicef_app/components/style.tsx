const React = require("react-native");

const { StyleSheet,TouchableOpacity,Text } = React;

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,


  },

  loginScreenContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    paddingTop: 70,

  },
  textCountainer:{
    flex:1,
    width: 269,
    height:89, 
    paddingTop: 30,
    marginRight:80,
  
  },
  logoText: {
    fontSize: 30,
    fontWeight: "600",
    alignItems:"center",
    fontFamily: "poppins",
    
   
  },
  logoImage:{
    width: 176,
    height:176,
    resizeMode:"contain",

  },
  loginFormView: {
    flex: 1,
    width: 360,
    height:200, 
    paddingTop: -20,
    paddingRight: 10,
    paddingBottom: 400,

  },
  loginFormTextInput: {
    height: 30,
    fontSize: 14,
    borderRadius: 0,
    borderWidth: 0,
    paddingLeft: 25,
    marginTop: 20,
    marginBottom: 5,
    color:'#9A9FA7',
    
  },
  line:{
  
   borderColor:'#DDDEE1' ,
   width: 325,
   borderWidth: 0.5,
   height: 1,
   marginLeft: 25,
  

  },
  passwordForgot:{
    color:"#1962D0",
    marginRight:20,
    fontWeight:'300',
    paddingTop: 30,
    paddingLeft:191,

   

  },
  inscription:{
    paddingTop: 50,
    color:"#1962D0",
    marginRight:20,
    alignItems:"center",
    paddingLeft: 85,
    fontWeight:'300',

  },
  iconStyle: {
    
    
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    borderRightWidth: 1,
    

  },
  
  loginButton: {
    backgroundColor: "#0065FF",
    borderRadius: 10,
    height: 45,
    marginTop: 30,
    width: 350,
    alignItems: "center"
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
    backgroundColor: 'transparent',
  },
});
export default styles;


