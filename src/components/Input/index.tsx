import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import theme from '../../theme';

import { styles } from './styles';

type InputProps = TextInputProps;

const Input = ({ ...rest }: InputProps): JSX.Element => {
  return (
    <TextInput
      {...rest}
      style={styles.input}
      placeholderTextColor={theme.colors.neutral_light_gray}
    />
  );
};

export default Input;
