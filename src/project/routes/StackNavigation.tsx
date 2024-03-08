import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

// File
import HomeScreen from '../screens/home/HomeScreen';
import ProductsScreen from '../screens/product/ProductsScreen';
import ProductScreen from '../screens/product/ProductScreen';
import SettingScreen from '../screens/settings/SettingScreen';

const Stack = createStackNavigator();

export default function StackNavigaton() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitleAlign: 'center',
        }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Productos',
          headerTitleAlign: 'center',
        }}
        name="Products"
        component={ProductsScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Producto',
          headerTitleAlign: 'center',
        }}
        name="Product"
        component={ProductScreen}
      />
      <Stack.Screen
        options={{
          headerTitleAlign: 'center',
          headerTitle: 'Configuracion',
        }}
        name="Setting"
        component={SettingScreen}
      />
    </Stack.Navigator>
  );
}
