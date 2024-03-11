// import {View, Text} from 'react-native';
import React from 'react';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Button} from 'react-native-paper';

export default function MenuDrawel() {
  const navegation = useNavigation();
  React.useEffect(() => {
    navegation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerLeft: () => (
        <Button
          icon="menu"
          onPress={() => navegation.dispatch(DrawerActions.toggleDrawer)}
          children={undefined}
        />
      ),
    });
  });

  return null;
}
