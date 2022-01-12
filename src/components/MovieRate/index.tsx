import React from 'react';
import {
  View,
  Image,
  TouchableOpacityProps,
  TouchableOpacity,
} from 'react-native';

import SpidermanImg from '../../images/spiderman.jpeg';
import theme from '../../theme';
import Like from '../Like';
import Rates from '../Rates';
import Text from '../Text';

import { styles } from './styles';

interface IMovieRateProps extends TouchableOpacityProps {
  isLiked: boolean;
}

const MovieRate = ({ isLiked, ...rest }: IMovieRateProps): JSX.Element => {
  return (
    <TouchableOpacity {...rest} activeOpacity={0.9}>
      <View style={styles.containerImage}>
        <Image
          source={require('../../images/homem-aranha.png')}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.containerLike}>
          <Like isLiked={isLiked} />
        </View>
      </View>

      <View style={styles.containerText}>
        <Text
          label="Spiderman: No Way Home"
          fontFamily={theme.fonts.Bold}
          color={theme.colors.neutral_gray}
          fontSize={theme.fontsSize.Medium14}
        />
      </View>

      <Rates vote={'8.5'} />
    </TouchableOpacity>
  );
};

export default MovieRate;
