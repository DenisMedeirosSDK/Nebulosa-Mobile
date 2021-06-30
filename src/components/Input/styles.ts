import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

const styles = StyleSheet.create({
  container: {
    height: 56,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: theme.colors.white,
    paddingHorizontal: 10,
    fontSize: 16,
    color: theme.colors.black,
    lineHeight: 24,
  },
});

export { styles };
