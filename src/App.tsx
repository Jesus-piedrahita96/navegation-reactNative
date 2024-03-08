import 'react-native-gesture-handler';

import {Text} from 'react-native';
import React from 'react';

// Navigation
import {NavigationContainer} from '@react-navigation/native';

// React native paper
import {PaperProvider} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function App() {
  return (
    <PaperProvider
      settings={{
        // eslint-disable-next-line react/no-unstable-nested-components
        icon: props => <Ionicons {...props} />,
      }}>
      <NavigationContainer>
        <Text>App</Text>
      </NavigationContainer>
    </PaperProvider>
  );
}
