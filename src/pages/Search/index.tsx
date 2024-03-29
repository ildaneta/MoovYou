import React, { useCallback, useState } from 'react';
import { View, KeyboardAvoidingView, Platform } from 'react-native';

import { styles } from './styles';
import MoviesAPI from '../../services/movies-api';
import MovieRate from '../../components/MovieRate';
import { FlatList } from 'react-native-gesture-handler';
import { RoutesName } from '../../utils/routesName';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IStackRoutes } from '../../routes/stack.routes';

import { IMoviesProps } from '../Home';
import Header from '../../components/Header';
import { useFocusEffect } from '@react-navigation/native';
import Loader from '../../components/Loader';
import Input from '../../components/Input';
import theme from '../../theme';

type SearchScreenNavigationProp = NativeStackNavigationProp<
  IStackRoutes,
  'Search'
>;

type Props = {
  navigation: SearchScreenNavigationProp;
};

const Search = ({ navigation }: Props): JSX.Element => {
  const [page, setPage] = useState(1);
  const [inputSearchText, setInputSearchText] = useState('');
  const [movieSearched, setMovieSearched] = useState<IMoviesProps>(
    {} as IMoviesProps,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState('');

  const { index, routes } = navigation.getState();
  const routeName = routes[index].name;

  console.log('Route name: ', routeName);

  const handleSearchMovie = (text: string) => {
    if (!text) {
      setIsError(true);
      setErrorText('The search canot be empty');
    }
    setInputSearchText(text);
    setIsError(false);
  };

  const getMovieSearched = async () => {
    if (inputSearchText === '') {
      setIsError(true);
      setMovieSearched({});
      setErrorText('Search cannot be empty');
      return;
    } else {
      setIsError(false);
      try {
        setIsLoading(true);
        const response = await MoviesAPI.getMoviesSearch(
          page,
          inputSearchText && inputSearchText,
        );
        setMovieSearched(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const selectedMovie = (id: number) => {
    const movieIdSelected = movieSearched!.results.find(
      movie => movie.id === id,
    );

    navigation.navigate(RoutesName.MOVIE_DESCRIPTION, {
      movieId: movieIdSelected?.id!,
    });
  };

  useFocusEffect(
    useCallback(() => {
      setMovieSearched({});
      setInputSearchText('');
      setErrorText('');
      setIsError(false);
    }, []),
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: theme.dimensions.Thin1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.header}>
        <Header />
      </View>

      <View style={styles.container}>
        <View style={styles.containerSearch}>
          <Input
            onChangeText={handleSearchMovie}
            onSubmitEditing={getMovieSearched}
            placeholder="Search your movie"
            value={inputSearchText}
            isError={isError}
            labelError={errorText}
            onPress={() => getMovieSearched()}
            autoFocus={true}
            autoCorrect={false}
          />
        </View>

        {isLoading ? (
          <Loader size="small" />
        ) : (
          <View style={styles.containerMovie}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={movieSearched.results}
              keyExtractor={item => String(item.id)}
              numColumns={2}
              renderItem={({ item }) => (
                <MovieRate
                  data={item}
                  isLiked={false}
                  onPress={() => selectedMovie(item.id)}
                  isSearch
                />
              )}
            />
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default Search;
