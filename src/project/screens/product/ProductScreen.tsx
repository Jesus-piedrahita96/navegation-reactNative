import {View, Text} from 'react-native';
import React from 'react';
import {
  RouteProp,
  StackActions,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {RootStackParams} from '../../routes/StackNavigation';
import {globalStyles} from '../../themes/theme';
import {Button} from 'react-native-paper';

export default function ProductScreen() {
  const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
  const navigation = useNavigation();

  return (
    <View>
      <Text style={globalStyles.title}>ProductScreen</Text>
      <Text style={globalStyles.title}>{params.name}</Text>
      {/* retrodeceder de acuerdo al historial */}
      <Button
        mode="contained-tonal"
        onPress={() => navigation.goBack()}
        style={globalStyles.styleButton}>
        Regresar
      </Button>
      {/* regresar al inicio establecido por la navegacion stack */}
      <Button
        mode="contained-tonal"
        onPress={() => navigation.dispatch(StackActions.popToTop())}
        style={globalStyles.styleButton}>
        ir al Home{' '}
      </Button>
    </View>
  );
}
