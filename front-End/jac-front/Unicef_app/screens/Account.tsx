import { Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import navigation from 'react-navigation';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';


export default function AccountScreen({navigation} :  NativeStackHeaderProps) {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text
              onPress={() => navigation.navigate('Events')}
              style={{ fontSize: 26, fontWeight: 'bold' }}>AccountScreen</Text>
      </View>
  );
}

