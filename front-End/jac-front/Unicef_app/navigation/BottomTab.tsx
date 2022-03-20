import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather, Ionicons, AntDesign    } from '@expo/vector-icons';
 

// Screens
import NewsFeedScreen from '../screens/Events';
import FAQScreen from '../screens/FAQ';
import AccountScreen from '../screens/Account';



const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return(
        <BottomTab.Navigator initialRouteName="Feed" screenOptions={{headerShown: false}}>
            <BottomTab.Screen 
                name="Feed"
                component={NewsFeedScreen}
                options={{
                    tabBarShowLabel: false,
                    unmountOnBlur: true,
                    tabBarStyle: { height: '10%', borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingRight: "10%", paddingLeft: "10%"},
                    tabBarIcon: ({size, color}) => 
                    <Feather 
                    name="home" 
                    size={size} 
                    color={color} />}}
            />
            <BottomTab.Screen 
                name="Account"
                component={AccountScreen}
                options={{
                    tabBarShowLabel: false,
                    unmountOnBlur: true,
                    tabBarStyle: { height: '10%', borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingRight: "10%", paddingLeft: "10%"},
                    tabBarIcon: ({size, color}) => 
                    <Ionicons 
                    name="person-outline" 
                    size={size} 
                    color={color} />
                }}
            />
            <BottomTab.Screen 
                name="Faq"
                component={FAQScreen}
                options={{
                    tabBarShowLabel: false,
                    unmountOnBlur: true,
                    tabBarStyle: { height: '10%', borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingRight: "10%", paddingLeft: "10%"},
                    tabBarIcon: ({size, color}) => 
                    <AntDesign 
                    name="questioncircleo" 
                    size={size} 
                    color={color} />
                }}
            />
        </BottomTab.Navigator>
    )
}
  
