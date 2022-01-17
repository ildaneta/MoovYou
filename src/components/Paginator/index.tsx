import React from 'react';
import {
  View,
  Animated,
  Dimensions,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import theme from '../../theme';

import Text from '../Text';

import { styles } from './styles';

interface IPaginatorProps {
  key: string;
  description: string;
  image: string;
}

interface IDataProps extends TouchableOpacityProps {
  data: Array<IPaginatorProps>;
  scrollX: Animated.Value;
  label: string;
}

const Paginator = ({
  data,
  scrollX,
  label,
  ...rest
}: IDataProps): JSX.Element => {
  const width = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <View style={styles.containerDots}>
        {data.map((_, index: number) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [10, 10, 10],
            extrapolate: 'clamp',
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              style={[styles.dot, { width: dotWidth, opacity }]}
              key={index.toString()}
            />
          );
        })}
      </View>

      <TouchableOpacity {...rest}>
        <Text
          label={label}
          fontFamily={theme.fonts.Bold}
          fontSize={theme.fontsSize.Intermediate16}
          color={theme.colors.neutral_white}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Paginator;
