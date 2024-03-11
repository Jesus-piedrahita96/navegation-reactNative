// React y React native
import {View, Text} from 'react-native';
import React from 'react';

// React native
import {
  type NavigationProp,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';

// Theme
import {globalStyles} from '../../themes/theme';

// React native paper
import {Button} from 'react-native-paper';
import {type RootStackParams} from '../../routes/StackNavigation';

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  React.useEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerLeft: () => (
        <Button
          icon="menu-outline"
          children={undefined}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
        />
      ),
    });
  });

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Portal App</Text>
      <Button
        style={globalStyles.styleButton}
        icon="pricetag-outline"
        mode="elevated"
        onPress={() => navigation.navigate('Products')}>
        Products
      </Button>
      <Button
        style={globalStyles.styleButton}
        icon="settings-outline"
        mode="elevated"
        onPress={() => navigation.navigate('Setting')}>
        Settings
      </Button>
    </View>
  );
}
