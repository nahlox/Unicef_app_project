import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity, useWindowDimensions, KeyboardAvoidingView } from 'react-native'
import { FontAwesome5, MaterialIcons} from '@expo/vector-icons'; 
import React, { useState } from 'react'
import CustomButton from '../components/Buttons';
import CustomTextInput from '../components/formInput';
import CustomButtonBorder  from '../components/linkButton';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';



export default function LoginScreen({navigation}: NativeStackHeaderProps) {
  
  
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();
  

  const onSignUpPressed = () => {
    console.warn("Sign up")
  }

  const onForgotPasswordPressed = () => {
    console.warn("Forgot Password")
  }

  const onLoginPressed = () => {
    console.warn("Login")
  }
  
  return (

    <View style={styles.container}>
      <StatusBar style='auto'/>
      <Image style={[styles.logo, 
      {height: height * 0.3}]}
       source={require('./../assets/UNICEF-Logo.png')}
       resizeMode="contain"></Image>

      <Text style={styles.title}>Connexion à mon compte UNICEF</Text>

      <View style={styles.emailContainer}>
      <CustomTextInput  
        placeholder = "Adresse mail" 
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <MaterialIcons name="alternate-email" size={27} color="#9A9FA7" />
      </View>

      <View style={styles.emailContainer}>
      <CustomTextInput 
        placeholder ="Mot de passe" 
        isPassword = {true}
        value = {password} 
        onChangeText={(password) => setPassword(password)}
      />
      <FontAwesome5 name="lock" size={27} color="#9A9FA7" />
      </View>

      <CustomButtonBorder text="Mot de passe oublié ?" onPress={() => navigation.navigate('ForgotPassword')}/>
      <CustomButton text="Se connecter" onPress={() => navigation.navigate('Events')}/>
      <View style={styles.signup}>
        <Text>Pas encore inscrit ?</Text>
        <CustomButtonBorder text="S'inscrire" onPress={() => navigation.navigate('SignUp')}/>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  padding: 20,
  alignItems: 'center',
  justifyContent: 'center',
  },
  logo: {
  width: 176,
  marginBottom: 20,
  },
  title: {
  color: '#172B4D',
  width: '80%',
  marginLeft: '-10%',
  marginBottom: "7%",
  fontSize: 30,
  fontWeight: 'bold',
  },
  emailContainer: {
  flexDirection: 'row-reverse',
  paddingBottom: 10,
  alignItems: 'center',
  },
  signup: {
  flexDirection: 'row',
  alignItems: 'center'
  }
}) 

   