import React from 'react';
import { ActivityIndicator } from 'react-native';
import theme from '../../theme';

import { styles } from './styles';
interface ILoaderProps {
  size: 'small' | 'large';
}

const Loader = ({ size }: ILoaderProps): JSX.Element => {
  return (
    <ActivityIndicator
      size={size}
      color={theme.colors.neutral_white}
      style={styles.activityIndicator}
    />
  );
};

export default Loader;
