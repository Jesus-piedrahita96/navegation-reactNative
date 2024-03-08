import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {globalStyles} from '../../themes/theme';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const products = [
  {id: 1, name: 'Product 1'},
  {id: 2, name: 'Product 2'},
  {id: 3, name: 'Product 3'},
  {id: 4, name: 'Product 4'},
  {id: 5, name: 'Product 5'},
  {id: 6, name: 'Product 6'},
  {id: 7, name: 'Product 7'},
  {id: 8, name: 'Product 8'},
  {id: 9, name: 'Product 9'},
  {id: 10, name: 'Product 10'},
];

export default function ProductsScreen() {
  const navigation = useNavigation();

  return (
    <View>
      <Text style={globalStyles.title}>Items</Text>
      <FlatList
        style={{height: '50%'}}
        data={products}
        renderItem={({item}) => (
          <Button
            style={globalStyles.styleButton}
            onPress={() => navigation.navigate('Product' as never)}
            mode="outlined">
            {item.name}
          </Button>
        )}
      />
      <Text style={globalStyles.title}>Ajustes</Text>
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
