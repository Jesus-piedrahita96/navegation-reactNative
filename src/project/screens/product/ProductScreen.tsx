import {View, Text} from 'react-native';
import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParams} from '../../routes/StackNavigation';

export default function ProductScreen() {
  const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;

  return (
    <View>
      <Text>ProductScreen</Text>
      <Text>{params.name}</Text>
    </View>
  );
}
