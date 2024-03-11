import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import StackNavigaton from './StackNavigation';
import ProfileScreen from '../screens/profile/ProfileScreen';
import {View, useWindowDimensions} from 'react-native';

const Drawer = createDrawerNavigator();

export function DrawerNavegation() {
  const dimension = useWindowDimensions();
  return (
    <Drawer.Navigator
      // eslint-disable-next-line react/no-unstable-nested-components
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        drawerType: dimension.width > 700 ? 'permanent' : 'slide',
      }}>
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="StackNavegation"
        component={StackNavigaton}
      />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

export const DrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          height: 200,
          backgroundColor: '#BB8FCE',
          margin: 25,
          borderRadius: 40,
        }}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
