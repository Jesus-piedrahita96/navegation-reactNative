import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// File
import Tab1Screen from '../screens/tabs/Tab1Screen';
import Tab2Screen from '../screens/tabs/Tab2Screen';
import Tab3Screen from '../screens/tabs/Tab3Screen';

const Tab = createBottomTabNavigator();

export function BottomTapNavegation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          elevation: 0,
        },
        tabBarStyle: {
          height: 80,
        },
        tabBarActiveTintColor: '#BB8FCE',
      }}>
      <Tab.Screen
        options={{
          headerTitle: 'Manzana',
          title: 'Apple',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => <Ionicons name="logo-apple" size={28} />,
        }}
        name="Tab1"
        component={Tab1Screen}
      />
      <Tab.Screen
        options={{
          headerTitle: 'Estelar',
          tabBarLabel: 'Estelar',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => <Ionicons name="logo-apple-ar" size={28} />,
        }}
        name="Tab2"
        component={Tab2Screen}
      />
      <Tab.Screen
        options={{
          headerTitle: 'Snap',
          tabBarLabel: 'Snap',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => <Ionicons name="logo-snapchat" size={28} />,
        }}
        name="Tab3"
        component={Tab3Screen}
      />
    </Tab.Navigator>
  );
}
