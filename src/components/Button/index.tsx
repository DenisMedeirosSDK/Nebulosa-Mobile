import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';

import { styles } from './styles';

type ButtonProps = TouchableOpacityProps & {
  title: string;
};

function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity {...rest} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export { Button };
