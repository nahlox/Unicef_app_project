import * as React from 'react';
import { View, Text } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

export default function FAQScreen({ navigation } :  NativeStackHeaderProps) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Events')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>FAQ Screen</Text>
        </View>
    );
}