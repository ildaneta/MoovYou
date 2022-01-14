import React from 'react';
import { ActivityIndicator } from 'react-native';
import theme from '../../theme';

interface ILoaderProps {
  size: 'small' | 'large';
}

const Loader = ({ size }: ILoaderProps): JSX.Element => {
  return <ActivityIndicator size={size} color={theme.colors.neutral_white} />;
};

export default Loader;
