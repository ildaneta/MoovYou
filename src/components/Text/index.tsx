import React from 'react';
import { Text as TextComponent, StyleSheet, TextProps } from 'react-native';

export interface ITextProps extends TextProps {
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
  ...rest
}: ITextProps): JSX.Element => {
  const { style } = { ...rest };

  const stylesProps = StyleSheet.create({
    text: {
      color,
      fontFamily,
      fontSize,
    },
  });

  return (
    <TextComponent style={[stylesProps.text, style]}>
      {isUpperCase ? label.toUpperCase() : label}
    </TextComponent>
  );
};

export default Text;
