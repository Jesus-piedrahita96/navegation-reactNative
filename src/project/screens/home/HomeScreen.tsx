// React y React native
import {View, Text} from 'react-native';
import React from 'react';

// React native
import {useNavigation} from '@react-navigation/native';

// Theme
import {globalStyles} from '../../themes/theme';

// React native paper
import {Button} from 'react-native-paper';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Portal App</Text>
      <Button
        style={globalStyles.styleButton}
        icon="pricetag-outline"
        mode="elevated"
        onPress={() => navigation.navigate('Products' as never)}>
        Products
      </Button>
      <Button
        style={globalStyles.styleButton}
        icon="settings-outline"
        mode="elevated"
        onPress={() => navigation.navigate('Setting' as never)}>
        Settings
      </Button>
    </View>
  );
}
