import React from 'react';
import {
  View,
  Image,
  TouchableOpacityProps,
  TouchableOpacity,
} from 'react-native';
import { MoviesDTO } from '../../dtos/MoviesDTO';

import theme from '../../theme';
import Like from '../Like';
import Rates from '../Rates';
import Text from '../Text';

import { styles } from './styles';

interface IMovieRateProps extends TouchableOpacityProps {
  isLiked: boolean;
  data: MoviesDTO;
  key: any;
}

const MovieRate = ({
  isLiked,
  data,
  key,
  ...rest
}: IMovieRateProps): JSX.Element => {
  return (
    <TouchableOpacity {...rest} activeOpacity={0.9} key={key}>
      <View style={styles.containerImage}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
          }}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.containerLike}>
          <Like isLiked={isLiked} />
        </View>
      </View>

      <View style={styles.containerText}>
        <Text
          label={data.title}
          fontFamily={theme.fonts.Bold}
          color={theme.colors.neutral_gray}
          fontSize={theme.fontsSize.Medium14}
        />
      </View>

      <Rates vote={data.vote_average} />
    </TouchableOpacity>
  );
};

export default MovieRate;
