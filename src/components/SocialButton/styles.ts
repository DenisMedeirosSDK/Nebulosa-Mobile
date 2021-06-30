import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

const styles = StyleSheet.create({
  container: {
    height: 56,
    borderRadius: 8,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    marginVertical: 20,
  },
  text: {
    fontSize: 18,
    color: theme.colors.black,
  },
});

export { styles };
