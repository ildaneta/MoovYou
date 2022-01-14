import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Header from '../../components/Header';
import MovieRate from '../../components/MovieRate';
import MovieTag from '../../components/MovieTag';
import Text from '../../components/Text';
import { MoviesDTO } from '../../dtos/MoviesDTO';
import MoviesAPI from '../../services/movies-api';
import theme from '../../theme';
import { RoutesName } from '../../utils/routesName';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IStackRoutes } from '../../routes/stack.routes';

import { styles } from './styles';
import Loader from '../../components/Loader';

type MainScreenNavigationProp = NativeStackNavigationProp<IStackRoutes, 'Home'>;

type Props = {
  navigation: MainScreenNavigationProp;
};

export interface IHomeMoviesProps {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: Array<MoviesDTO>;
  total_pages: number;
  total_results: number;
}

const Home = ({ navigation }: Props): JSX.Element => {
  const [moviesListNowPlaying, setMoviesListNowPlaying] =
    useState<IHomeMoviesProps>({} as IHomeMoviesProps);
  const [moviesTopRated, setMoviesTopRated] = useState<IHomeMoviesProps>(
    {} as IHomeMoviesProps,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [page, _] = useState(1);

  const LoadMoviesNowPlaying = async () => {
    try {
      setIsLoading(true);
      const response = await MoviesAPI.getMoviesListNowPlaying(page);
      setMoviesListNowPlaying(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      throw new Error('Ops! We had an error to get the movies list!');
    }
  };

  const LoadMoviesTopRated = async () => {
    try {
      setIsLoading(true);
      const response = await MoviesAPI.getMoviesTopRated(page);
      setMoviesTopRated(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      throw new Error('Ops! We had an error to get the movies list!');
    }
  };

  const selectedMovieTopRated = (id: number) => {
    const movieIdSelected = moviesTopRated.results.find(
      movie => movie.id === id,
    );

    navigation.navigate(RoutesName.MOVIE_DESCRIPTION, {
      movieId: movieIdSelected?.id!,
    });
  };

  useEffect(() => {
    LoadMoviesNowPlaying();
    LoadMoviesTopRated();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader size="small" />
      ) : (
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}>
          <Header />

          <Text
            label="Now Showing"
            fontFamily={theme.fonts.Medium}
            fontSize={theme.fontsSize.Large20}
            color={theme.colors.neutral_middle_white}
            style={styles.divider}
          />

          <View style={styles.containerFlatlistHorizontal}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={moviesListNowPlaying.results}
              keyExtractor={item => String(item.id)}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <MovieRate data={item} isLiked={false} />
              )}
              ItemSeparatorComponent={() => (
                <View style={styles.separatorHorizontal} />
              )}
            />
          </View>

          <Text
            label="Top Rated"
            fontFamily={theme.fonts.Medium}
            fontSize={theme.fontsSize.Large20}
            color={theme.colors.neutral_middle_white}
            style={styles.title}
          />

          <FlatList
            data={moviesTopRated.results}
            keyExtractor={item => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <MovieTag
                data={item}
                isLiked={false}
                onPress={() => selectedMovieTopRated(item.id)}
              />
            )}
            ItemSeparatorComponent={() => <View style={styles.divider} />}
            ListFooterComponent={() => (
              <View style={styles.footerSpaceFlatlist} />
            )}
          />
        </ScrollView>
      )}
    </>
  );
};

export default Home;
