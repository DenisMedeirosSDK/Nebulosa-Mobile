import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';

import { styles } from './styles';

type ButtonProps = TouchableOpacityProps & {
  title: string;
  color: string;
  textColor: string;
};

function SocialButton({ title, color, textColor, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      {...rest}
      style={[styles.container, { backgroundColor: color }]}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}

export { SocialButton };
