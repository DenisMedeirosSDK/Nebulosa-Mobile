import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { styles } from './styles';

type InputProps = TextInputProps & {};

function Input({ ...rest }: InputProps) {
  return <TextInput {...rest} style={styles.container} />;
}

export { Input };
