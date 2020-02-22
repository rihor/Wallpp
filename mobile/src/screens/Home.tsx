import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home(): React.ReactElement {
  const navigation = useNavigation();

  return (
    <View>
      <Text
        onPress={() => {
          navigation.navigate('Profile');
        }}>
        Home Screen
      </Text>
    </View>
  );
}
