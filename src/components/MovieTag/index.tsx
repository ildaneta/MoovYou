import React from 'react';
import { View, Image } from 'react-native';
import { MoviesDTO } from '../../dtos/MoviesDTO';
import theme from '../../theme';
import { getNameGenres } from '../../utils/getNameGenres';

import Like from '../Like';
import Rates from '../Rates';
import Tag from '../Tag';
import Text from '../Text';

import { styles } from './styles';

interface IMovieTagProps {
  data: MoviesDTO;
  isLiked: boolean;
}

const MovieTag = ({ data, isLiked }: IMovieTagProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
        }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.containerLike}>
        <Like isLiked={isLiked} />
      </View>

      <View>
        <Text
          label={data.title}
          color={theme.colors.neutral_gray}
          fontFamily={theme.fonts.Bold}
          fontSize={theme.fontsSize.Medium14}
        />

        <View style={styles.dividerTextRates} />

        <Rates vote={data.vote_average} />
        <View style={styles.containerTags}>
          {data.genre_ids.map(genreId => (
            <Tag
              title={getNameGenres(genreId)}
              tagType="PillTag"
              key={genreId}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default MovieTag;
