import React, { useCallback, useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import theme from '../../theme';

import SearchIconSVG from '../../images/search-icon-page.svg';

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

  const handleSearchMovie = (text: string) => {
    if (!text) {
      console.log('a busca nao pode estar vazia');
    }
    setInputSearchText(text);
  };

  const getMovieSearched = async () => {
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
      setInputSearchText('');
      setMovieSearched({});
    }, []),
  );
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.header}>
        <Header />
      </View>

      <View style={styles.container}>
        <View style={styles.containerSearch}>
          <TextInput
            onChangeText={handleSearchMovie}
            onSubmitEditing={getMovieSearched}
            placeholder="Search your movie"
            style={styles.input}
            placeholderTextColor={theme.colors.neutral_light_gray}
            value={inputSearchText}
          />

          <View style={styles.search}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                getMovieSearched();
              }}>
              <SearchIconSVG />
            </TouchableOpacity>
          </View>
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
