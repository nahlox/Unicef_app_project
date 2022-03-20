
import { StatusBar } from "expo-status-bar";

//screens
import LoginScreen from "./screens/Login";
import SignUpScreen from "./screens/SignUp";
import ForgotPasswordScreen from "./screens/ForgotPassword";
import AccountScreen from "./screens/Account";
import FAQScreen from "./screens/FAQ";
import EventsScreen from "./screens/Events";
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from "./navigation/BottomTab";
import NewPasswordScreen from "./screens/Newpassword";

const Stack = createNativeStackNavigator();


export default function App() {
  return(
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown: false}}>
     
      
      <Stack.Screen name="BottomTab" component={BottomTabNavigator}/>

      </Stack.Navigator>
    </NavigationContainer>




  );

};


