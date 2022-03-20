import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity, useWindowDimensions, ColorPropType } from 'react-native'
import { Ionicons, FontAwesome5, MaterialIcons} from '@expo/vector-icons'; 
import React, { useState } from 'react'
import CustomButton from '../components/Buttons';
import CustomTextInput from '../components/formInput';
import CustomButtonBorder from '../components/linkButton';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

export default function SignUpScreen({navigation} : NativeStackHeaderProps) {
  const [firstName, setFirstName] = useState('');
  const [Name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn("Sign in")
  }
  const onLoginPressed = () => {
    console.warn("Login")
  }
  const onTermsOfUsePressed = () => {
    console.warn("Terms of Use")
  }
  const onPrivacyPolicyPressed = () => {
    console.warn("Privacy Policy")
  }
  const onCookiesPolicyPressed = () => {
    console.warn("Cookies Policy")
  }
  
  return (
    <View style={styles.container}>
      <StatusBar style='auto'/>
      <Image style={[styles.logo, 
       {height: height * 0.3}]}
        source={require('./../assets/UNICEF-Logo.png')} 
        resizeMode="contain"></Image>
      <Text style={styles.title}>Inscription</Text>

      <View style={styles.emailContainer}>
      <CustomTextInput  
        placeholder = "Prénom" 
        value={firstName}
        onChangeText={(firstName) => setFirstName(firstName)}
      />
      <Ionicons name="person" size={27} color="#9A9FA7" />
      </View>

      <View style={styles.emailContainer}>
      <CustomTextInput  
        placeholder = "Nom" 
        value={Name}
        onChangeText={(Name) => setName(Name)}
      />
      <Ionicons name="person" size={27} color="#9A9FA7" />
      </View>

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

      <Text style={styles.infoText}>En vous inscrivant, vous acceptez nos {' '}
        <Text style={styles.infoTextColored} onPress={onTermsOfUsePressed}>Conditions d'utilisation</Text> ainsi que nos {' '}
        <Text style={styles.infoTextColored} onPress={onPrivacyPolicyPressed}>Politiques de confidentialité</Text> et {' '}
        <Text style={styles.infoTextColored} onPress={onCookiesPolicyPressed}>Politiques de Cookies</Text>
      </Text>

      <CustomButton text="S'inscrire" onPress={() => navigation.navigate('Login')}/>
      <View style={styles.signup}>
        <Text>Déjà inscrit ?</Text>
        <CustomButtonBorder text="Se connecter" onPress={() => navigation.navigate('Login')}/>
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
  marginLeft: '-5%',
  marginBottom: "7%",
  fontSize: 30,
  fontWeight: 'bold',
  },
  emailContainer: {
  flexDirection: 'row-reverse',
  paddingBottom: 10,
  marginLeft: "3%",
  alignItems: 'center',
  },
  infoText: {
    color: '#9A9FA7',
    marginLeft: "3%",
    marginBottom: "10%"
  },
  infoTextColored: {
    color: '#1962D0'
  },
  signup: {
  flexDirection: 'row',
  alignItems: 'center'
  }
}) 