import React, { ReactElement } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { MoviesDTO } from '../../dtos/MoviesDTO';
import theme from '../../theme';
import { getNameGenres } from '../../utils/getNameGenres';

import Like from '../Like';
import Rates from '../Rates';
import Tag from '../Tag';
import Text from '../Text';

import { styles } from './styles';

interface IMovieTagProps extends TouchableOpacityProps {
  data: MoviesDTO;
  isLiked: boolean;
  children?: ReactElement<any, any>;
  hasShownLike?: boolean;
}

const MovieTag = ({
  data,
  isLiked,
  children,
  hasShownLike,
  ...rest
}: IMovieTagProps): JSX.Element => {
  return (
    <TouchableOpacity style={styles.container} {...rest} activeOpacity={0.9}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
        }}
        style={styles.image}
        resizeMode="cover"
      />

      {hasShownLike && (
        <View style={styles.containerLike}>
          <Like isLiked={isLiked} />
        </View>
      )}

      <View style={styles.containerTitleTagRate}>
        <Text
          label={data.title}
          color={theme.colors.neutral_gray}
          fontFamily={theme.fonts.Bold}
          fontSize={theme.fontsSize.Medium14}
          style={styles.title}
        />

        <View style={styles.dividerTextRates} />

        <Rates vote={data.vote_average} />

        {children && children}

        {data.genre_ids && (
          <View style={styles.containerTags}>
            {data.genre_ids.map(genreId => (
              <Tag
                title={getNameGenres(genreId)}
                tagType="PillTag"
                key={genreId}
              />
            ))}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default MovieTag;
