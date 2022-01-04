import React from 'react';
import { Text as TextComponent, StyleSheet } from 'react-native';
import { AlignTypes } from '../../utils/enum';

interface ITextComponentProps {
  textAlign: AlignTypes;
  label: string;
  color: string;
  fontSize: number;
  fontFamily: string;
}

const Text = ({
  textAlign,
  label,
  color,
  fontSize,
  fontFamily,
}: ITextComponentProps): JSX.Element => {
  const stylesProps = StyleSheet.create({
    text: {
      textAlign,
      color,
      fontFamily,
      fontSize,
    },
  });

  return <TextComponent style={stylesProps.text}>{label}</TextComponent>;
};

export default Text;
