// Navigation
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

// React y React native
import React from 'react';

// React native paper
import {PaperProvider} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

// File
import StackNavigaton from './project/routes/StackNavigation';

export default function App() {
  return (
    <PaperProvider
      settings={{
        // eslint-disable-next-line react/no-unstable-nested-components
        icon: props => <Ionicons {...props} />,
      }}>
      <NavigationContainer>
        <StackNavigaton />
      </NavigationContainer>
    </PaperProvider>
  );
}
