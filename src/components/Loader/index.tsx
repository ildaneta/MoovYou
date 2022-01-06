import React from 'react';
import { ActivityIndicator, StyleProp, ViewStyle } from 'react-native';

interface ILoaderProps {
  size: 'small' | 'large';
  color: string;
  styles: StyleProp<ViewStyle>;
}

const Loader = ({ size, color, styles }: ILoaderProps): JSX.Element => {
  return <ActivityIndicator size={size} color={color} style={styles} />;
};

export default Loader;
