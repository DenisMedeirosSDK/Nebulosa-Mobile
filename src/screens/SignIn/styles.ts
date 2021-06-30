import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  banner: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  title: {
    fontSize: 46,
    color: theme.colors.white,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 16,
    color: theme.colors.white,
  },
  form: {
    marginVertical: 24,
  },
  wrapperField: {
    marginBottom: 20,
  },
  label: {
    color: theme.colors.white,
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 5,
  },
});

export { styles };
