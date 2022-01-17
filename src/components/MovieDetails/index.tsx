import React from 'react';
import { View } from 'react-native';
import { MovieDetailsDTO } from '../../dtos/MovieDetailsDTO';
import theme from '../../theme';
import Tag from '../Tag';
import Text from '../Text';

import HourSVG from '../../images/hour-icon.svg';

import { styles } from './styles';
import Rates from '../Rates';

interface IMovieDetailsProps {
  data: MovieDetailsDTO;
}

const MovieDetails = ({ data, ...rest }: IMovieDetailsProps): JSX.Element => {
  const getMovieDuration = (runtime: number) => {
    const duration = Math.abs(runtime / 60);
    const durationHourMinute = String(duration.toFixed(2)).split('');

    let hour = Number(durationHourMinute[0]);
    let minutes = Number(durationHourMinute[2] + durationHourMinute[3]);

    if (minutes > 60) {
      const rest = Math.abs(minutes / 60)
        .toFixed(2)
        .split('');

      hour = hour + Number(rest[0]);
      minutes = Number(rest[2] + rest[3]);
    }

    if (Number(hour) === 1) {
      return `${hour}hr ${minutes}min`;
    } else if (Number(hour) === 0) {
      return `${minutes}min`;
    } else {
      return `${hour}hrs ${minutes}min`;
    }
  };

  return (
    <View style={styles.movieDetails} {...rest}>
      {!!data.vote_average && (
        <View style={styles.containerRate}>
          <Text
            label="Rate"
            fontFamily={theme.fonts.Light}
            fontSize={theme.fontsSize.Medium14}
            color={theme.colors.neutral_gray}
            style={styles.rate}
          />

          <Rates vote={data.vote_average} />
        </View>
      )}

      {!!data.genres && (
        <View style={[styles.containerRate, styles.containerGenreTag]}>
          <Text
            label="Genre"
            fontFamily={theme.fonts.Light}
            fontSize={theme.fontsSize.Medium14}
            color={theme.colors.neutral_gray}
            style={styles.rate}
          />

          <View style={styles.containerGenre}>
            {data.genres &&
              data.genres!.map(tag => (
                <Tag tagType="SquareTag" title={tag.name} key={tag.id} />
              ))}
          </View>
        </View>
      )}

      {!!data.runtime && (
        <View style={styles.containerRate}>
          <Text
            label="Duration"
            fontFamily={theme.fonts.Light}
            fontSize={theme.fontsSize.Medium14}
            color={theme.colors.neutral_gray}
            style={styles.rate}
          />

          <HourSVG />

          <Text
            label={getMovieDuration(data.runtime)}
            fontFamily={theme.fonts.Light}
            fontSize={theme.fontsSize.Medium14}
            color={theme.colors.neutral_gray}
            style={[styles.rate, styles.duration]}
          />
        </View>
      )}
    </View>
  );
};

export default MovieDetails;
