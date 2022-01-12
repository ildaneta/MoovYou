import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import theme from '../../theme';
import { AlignTypes } from '../../utils/enum';
import Text from '../Text';

import { styles } from './styles';

interface IPillButtonProperties extends TouchableOpacityProps {
  label: string;
}

const PillButton = ({ label, ...rest }: IPillButtonProperties): JSX.Element => {
  return (
    <TouchableOpacity style={styles.container} {...rest} activeOpacity={0.7}>
      <Text
        label={label}
        color={theme.colors.neutral_gray}
        fontFamily={theme.fonts.Medium}
        fontSize={theme.fontsSize.Medium14}
      />
    </TouchableOpacity>
  );
};

export default PillButton;
