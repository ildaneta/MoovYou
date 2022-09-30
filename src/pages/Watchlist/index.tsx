import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import { View, FlatList } from 'react-native';
import Header from '../../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

import EmptyScreenSVG from '../../images/empty-state-favorites.svg';
import theme from '../../theme';
import { AlignTypes } from '../../utils/enum';

import { styles } from './styles';
import { MovieDetailsDTO } from '../../dtos/MovieDetailsDTO';
import Text from '../../components/Text';
import Loader from '../../components/Loader';
import MovieTag from '../../components/MovieTag';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IStackRoutes } from '../../routes/stack.routes';
import { RoutesName } from '../../utils/routesName';
import { ScrollView } from 'react-native-gesture-handler';
import Tag from '../../components/Tag';
import { getNameGenres } from '../../utils/getNameGenres';
import { useFocusEffect } from '@react-navigation/native';

export type IMoviesFavorites = [
  {
    movieId: string;
    movieDetails: MovieDetailsDTO;
    isLiked: boolean;
  },
];

type WatchlistScreenNavigationProp = NativeStackNavigationProp<
  IStackRoutes,
  'Watch_List'
>;

type Props = {
  navigation: WatchlistScreenNavigationProp;
};

const Watchlist = ({ navigation }: Props): JSX.Element => {
  const favoriteMovieKey = '@MoovYou:favorites-movies';
  const [favorites, setFavorites] = useState<IMoviesFavorites>();
  const [isLoading, setIsLoading] = useState(false);

  const loadData = async () => {
    try {
      setIsLoading(true);
      const response = await AsyncStorage.getItem(favoriteMovieKey);

      const responseFormatted = response ? JSON.parse(response) : [];

      setFavorites(responseFormatted);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      throw new Error('Error searching favorites movies');
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, []),
  );

  return (
    <>
      {isLoading && <Loader size="large" />}

      {favorites?.length > 0 ? (
        <ScrollView style={styles.scrollviewContainer}>
          <Text
            label="Favorites"
            fontFamily={theme.fonts.Medium}
            fontSize={theme.fontsSize.Large20}
            color={theme.colors.neutral_middle_white}
            style={styles.title}
          />

          <FlatList
            data={favorites}
            keyExtractor={item => String(item.movieId)}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => (
              <View style={{ marginVertical: 10 }} />
            )}
            ListFooterComponent={() => <View style={{ marginBottom: 20 }} />}
            renderItem={({ item }) => (
              <>
                <MovieTag
                  data={item.movieDetails}
                  isLiked={item.isLiked}
                  hasShownLike
                  onPress={() =>
                    navigation.navigate(RoutesName.MOVIE_DESCRIPTION, {
                      movieId: Number(item.movieId),
                    })
                  }>
                  <View style={styles.containerTags}>
                    {item.movieDetails.genres.map(genre => (
                      <Tag
                        key={genre.id}
                        tagType="PillTag"
                        title={genre.name}
                      />
                    ))}
                  </View>
                </MovieTag>
              </>
            )}
          />
        </ScrollView>
      ) : (
        <>
          <View style={styles.header}>
            <Header />
          </View>
          <View style={styles.container}>
            <View style={styles.containerImageDescription}>
              <EmptyScreenSVG />

              <Text
                label="You don't have favorites movies yet. Go to home or search page and find your favorite movie."
                fontFamily={theme.fonts.Medium}
                fontSize={theme.fontsSize.Intermediate16}
                color={theme.colors.neutral_gray}
                textAlign={AlignTypes.center}
                style={styles.description}
              />
            </View>
          </View>
        </>
      )}
    </>
  );
};

export default Watchlist;
