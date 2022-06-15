import React from 'react';
import {
  View,
  Image,
  TouchableOpacityProps,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { MoviesDTO } from '../../dtos/MoviesDTO';

import theme from '../../theme';
import { AlignTypes } from '../../utils/enum';
import Like from '../Like';
import Rates from '../Rates';
import Text from '../Text';

import { styles } from './styles';

interface IMovieRateProps extends TouchableOpacityProps {
  isLiked: boolean;
  data: MoviesDTO;
  isSearch?: boolean;
  hasShownLike?: boolean;
}

const MovieRate = ({
  isLiked,
  data,
  isSearch,
  hasShownLike,
  ...rest
}: IMovieRateProps): JSX.Element => {
  const stylesProps = StyleSheet.create({
    container: {
      height: theme.dimensions.Hudge320,
      width: theme.dimensions.width50p,
      alignItems: AlignTypes.center,
    },
  });

  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.9}
      style={isSearch ? stylesProps.container : styles.container}>
      <View style={styles.containerImage}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
          }}
          resizeMode="cover"
          style={styles.image}
        />

        {hasShownLike && (
          <View style={styles.containerLike}>
            <Like isLiked={isLiked} />
          </View>
        )}
      </View>

      <View style={styles.containerText}>
        <Text
          label={data.title}
          fontFamily={theme.fonts.Bold}
          color={theme.colors.neutral_gray}
          fontSize={theme.fontsSize.Medium14}
          style={styles.title}
        />

        <Rates vote={data.vote_average} />
      </View>
    </TouchableOpacity>
  );
};

export default MovieRate;
