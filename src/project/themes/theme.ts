import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'left',
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 20,
    marginLeft: 10,
  },
  containerButton: {
    flex: 1,
    alignItems: 'center',
    rowGap: 10,
  },
  styleButton: {
    margin: 10,
    borderRadius: 6,
  },
});
