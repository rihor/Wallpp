import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Profile(): React.ReactElement {
  const navigation = useNavigation();

  return (
    <View>
      <Text
        onPress={() => {
          navigation.navigate('Home');
        }}>
        Profile Screen
      </Text>
    </View>
  );
}
