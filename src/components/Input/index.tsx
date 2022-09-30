import React from 'react';
import {
  TextInput,
  TextInputProps,
  View,
  TouchableOpacity,
} from 'react-native';
import theme from '../../theme';
import Text from '../Text';

import SearchIconSVG from '../../images/search-icon-page.svg';

import { styles } from './styles';

interface IInputProps extends TextInputProps {
  isError: boolean;
  labelError: string;
  onPress: () => void;
}

const Input = ({
  isError,
  labelError,
  onPress,
  ...rest
}: IInputProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          {...rest}
          style={[styles.input, isError && styles.inputError]}
          placeholderTextColor={theme.colors.neutral_light_gray}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onPress}
          style={[styles.search, isError && styles.inputError]}>
          <SearchIconSVG />
        </TouchableOpacity>
      </View>

      {isError && (
        <View style={styles.textError}>
          <Text
            fontFamily={theme.fonts.Regular}
            fontSize={theme.fontsSize.Medium14}
            color={theme.colors.neutral_red}
            label={labelError}
          />
        </View>
      )}
    </View>
  );
};

export default Input;
