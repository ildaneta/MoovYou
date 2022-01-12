import React from 'react';
import { Text as TextComponent, StyleSheet } from 'react-native';
import { AlignTypes } from '../../utils/enum';

export interface ITextProps {
  label: string;
  color: string;
  fontSize: number;
  fontFamily: string;
  isUpperCase?: boolean;
}

const Text = ({
  label,
  color,
  fontSize,
  fontFamily,
  isUpperCase,
}: ITextProps): JSX.Element => {
  const stylesProps = StyleSheet.create({
    text: {
      color,
      fontFamily,
      fontSize,
    },
  });

  return (
    <TextComponent style={stylesProps.text}>
      {isUpperCase ? label.toUpperCase() : label}
    </TextComponent>
  );
};

export default Text;
