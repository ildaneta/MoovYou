import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  Platform,
  View,
} from 'react-native';
import Text from '../../components/Text';
import { MovieDetailsDTO } from '../../dtos/MovieDetailsDTO';
import { IStackRoutes } from '../../routes/stack.routes';
import MoviesAPI from '../../services/movies-api';
import theme from '../../theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
import { IMoviesFavorites } from '../Watchlist';
import { useFocusEffect } from '@react-navigation/native';

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

export type movieCastType = Omit<MovieCastDTO, 'id'>;

const MovieDescription = ({ route, navigation }: Props): JSX.Element => {
  const favoriteMovieKey = '@MoovYou:favorites-movies';
  const [isLoading, setIsLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState<MovieDetailsDTO>(
    {} as MovieDetailsDTO,
  );
  const [movieCastReduced, setMovieCastReduced] = useState<movieCastType>();
  const [dataStoraged, setDataStoreg] = useState<IMoviesFavorites>();
  const [isLikedMovie, setIsLikedMovie] = useState<boolean | undefined>(false);
  const [likedMovie, setLikedMovie] = useState(false);

  const { movieId } = route.params;

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

  const CheckFilmFavorite = () => {
    setIsLoading(false);
    console.log('filme desfavoritado');

    setLikedMovie(false);

    const removeItem = async () => {
      const teste = await AsyncStorage.getItem(favoriteMovieKey);

      const currentData: IMoviesFavorites = teste ? JSON.parse(teste) : [];
      const filmFavoriteFromAsync = currentData.filter(
        item => Number(item.movieId) === movieId,
      );

      console.log('Chegandooo: ', filmFavoriteFromAsync);

      // AsyncStorage.removeItem(favoriteMovieKey, JSON.parse(filmFavoriteFromAsync));
    };

    removeItem();
  };

  const firstActors = movieCastReduced && movieCastReduced?.cast.slice(0, 4);

  const saveFavoriteMovie = async () => {
    const moviesFavorites = {
      movieId: movieId,
      movieDetails: movieDetails,
      isLiked: true,
    };
    try {
      if (likedMovie || isLikedMovie) {
        //  TODO inserir funcao CheckFilmFavorite
        console.log('Filme ja esta em favoritos');
        return;
      }

      if (!likedMovie) {
        // setLikedMovie(prev => !prev);
        console.log('filme favoritado');
        setIsLoading(true);

        const data = await AsyncStorage.getItem(favoriteMovieKey);

        const currentData = data ? JSON.parse(data) : [];

        const dataFormatted = [...currentData, moviesFavorites];

        await AsyncStorage.setItem(
          favoriteMovieKey,
          JSON.stringify(dataFormatted),
        );
        setLikedMovie(true);
        setIsLoading(false);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const loadData = async () => {
    try {
      setIsLoading(true);
      const favoriteMovieKey = '@MoovYou:favorites-movies';
      const response = await AsyncStorage.getItem(favoriteMovieKey);

      const responseFormatted = response ? JSON.parse(response) : [];

      setDataStoreg(responseFormatted);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      throw new Error('Error searching favorites movies');
    }
  };

  useFocusEffect(
    useCallback(() => {
      LoadMovieDetails();
      GetMoviesCast();
      loadData();
    }, []),
  );

  useEffect(() => {
    async function isFavorite() {
      const isFavorite = await dataStoraged?.some(
        item => Number(item.movieId) === movieId,
      );

      setIsLikedMovie(isFavorite);
    }

    isFavorite();
  });

  return (
    <>
      {isLoading && <ActivityIndicator size="small" />}
      <ScrollView style={styles.container}>
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

                {Platform.OS === 'ios' && (
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
                <Like
                  isLiked={isLikedMovie! || likedMovie}
                  onPress={saveFavoriteMovie}
                />
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
      </ScrollView>
    </>
  );
};

export default MovieDescription;
