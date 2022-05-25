import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { ImageBackground, Platform, View } from 'react-native';
import Text from '../../components/Text';
import { MovieDetailsDTO } from '../../dtos/MovieDetailsDTO';
import { IStackRoutes } from '../../routes/stack.routes';
import MoviesAPI from '../../services/movies-api';
import theme from '../../theme';

import ArrowBackSVG from '../../images/arrow-back-icon.svg';

import { styles } from './styles';
import {
  BorderlessButton,
  FlatList,
  ScrollView,
} from 'react-native-gesture-handler';
import Like from '../../components/Like';
import Loader from '../../components/Loader';
import MovieDetails from '../../components/MovieDetails';
import Cast from '../../components/Cast';
import { MovieCastDTO } from '../../dtos/MovieCastDTO';

type MovieDetailsScreenNavigationProp = NativeStackNavigationProp<
  IStackRoutes,
  'Movie_Description'
>;

type Props = {
  route: {
    params: {
      movieId: number;
    };
  };
  navigation: MovieDetailsScreenNavigationProp;
};

type movieCastType = Omit<MovieCastDTO, 'id'>;

const MovieDescription = ({ route, navigation }: Props): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState<MovieDetailsDTO>(
    {} as MovieDetailsDTO,
  );
  const [movieCastReduced, setMovieCastReduced] = useState<movieCastType>();

  const { movieId } = route.params;

  const { index, routes } = navigation.getState();
  const routeName = routes[index].name;

  console.log('Route name: ', routeName);

  const LoadMovieDetails = async () => {
    try {
      setIsLoading(true);
      const response = await MoviesAPI.getMovieDetails(movieId);
      setMovieDetails(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      throw new Error('Ops! We had an error to get the movie details!');
    }
  };

  const GetMoviesCast = async () => {
    try {
      const response = await MoviesAPI.getMovieCast(movieId);
      setMovieCastReduced(response.data);
    } catch (error) {
      console.log(error);
      throw new Error('Ops! We had an error to get the movie cast!');
    }
  };

  const firstActors = movieCastReduced && movieCastReduced?.cast.slice(0, 4);

  useEffect(() => {
    LoadMovieDetails();
    GetMoviesCast();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {isLoading ? (
        <Loader size="small" />
      ) : (
        <>
          <View style={styles.containerImage}>
            {movieDetails.backdrop_path === null ? (
              <>
                <View style={styles.imageWithoutBackground} />
              </>
            ) : (
              <>
                <ImageBackground
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`,
                  }}
                  resizeMode="cover"
                  style={styles.image}
                  resizeMethod="scale"
                />

                {Platform.OS === 'android' ? null : (
                  <BorderlessButton
                    onPress={() => navigation.goBack()}
                    style={styles.arrowBack}>
                    <ArrowBackSVG />
                  </BorderlessButton>
                )}
              </>
            )}
          </View>

          <View style={styles.containerMovieDetails}>
            <View style={styles.containerTitleLike}>
              <Text
                label={movieDetails.title}
                fontFamily={theme.fonts.Bold}
                fontSize={theme.fontsSize.Large20}
                color={theme.colors.neutral_white}
                style={styles.movieTitle}
              />

              <View style={styles.like}>
                <Like isLiked={false} onPress={() => {}} />
              </View>
            </View>

            <MovieDetails data={movieDetails} />

            <Text
              label="SYNOPSIS"
              fontFamily={theme.fonts.Bold}
              fontSize={theme.fontsSize.Medium14}
              color={theme.colors.neutral_white}
            />

            <Text
              label={movieDetails.overview}
              fontFamily={theme.fonts.Regular}
              fontSize={theme.fontsSize.Medium14}
              color={theme.colors.neutral_light_gray}
              style={styles.synopsis}
            />

            {firstActors?.length === 0 ? (
              <></>
            ) : (
              <>
                <Text
                  label="CAST"
                  fontFamily={theme.fonts.Bold}
                  fontSize={theme.fontsSize.Medium14}
                  color={theme.colors.neutral_white}
                  style={styles.castTitle}
                />

                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={firstActors}
                  renderItem={({ item: movie }) => (
                    <Cast
                      image={`https://image.tmdb.org/t/p/w500/${movie.profile_path}`}
                      castName={movie.original_name}
                    />
                  )}
                  ItemSeparatorComponent={() => (
                    <View style={styles.actorsList} />
                  )}
                />
              </>
            )}
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default MovieDescription;
