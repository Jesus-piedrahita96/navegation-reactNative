import {View, StyleSheet} from 'react-native';
import React from 'react';
import {BottomTapNavegation} from '../../routes/BottomTapNavegation';

export default function ProfileScreen() {
  return (
    <View style={styles.cont}>
      <BottomTapNavegation />
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
});
